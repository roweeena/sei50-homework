require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'colorize'

def db_query (sql)

    puts '=============================================================='.green
    puts ' '
    puts sql.green
    puts ' '
    puts '=============================================================='.green


    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close
    results
end # end of db_query()


# root, but I redirect from it
get '/' do
    erb :home

    redirect '/famous_brummies'
end # end of get '/'

# --CREATE-- 

get '/famous_brummies/new' do
    erb :new
end # end of /new/

post '/famous_brummies' do
    new_sql = "
    INSERT INTO famous_brummies (name, famous_for, year_born, year_died, born_in_brum, famous_brummy_rating, image_url)
    VALUES (
        '#{ params[:name] }',
        '#{ params[:famous_for] }',
        #{ params[:year_born] },
        #{ params[:year_died] },
        #{ params[:born_in_brum] },
        #{ params[:famous_brummy_rating] },
        '#{ params[:image_url] }'
    );
    "

    db_query(new_sql)

    redirect '/famous_brummies'

end

# --READ--

get '/famous_brummies' do

    @results = db_query('SELECT * FROM famous_brummies ORDER BY name;')

    erb :gallery
end

get '/famous_brummies/:id' do

    @brummy = (db_query("SELECT * FROM famous_brummies WHERE id = #{ params[:id] };")).first

    erb :show
    
end #end of get '/famous_brummys/:id'

# --UPDATE--

get '/famous_brummies/:id/edit' do

    @brummy = db_query( "SELECT * FROM famous_brummies WHERE id = #{ params[:id]};" )
    @brummy = @brummy.first

    # params.to_s
    
    erb :edit
end

post '/famous_brummies/:id' do

        new_sql = "
    UPDATE famous_brummies SET
        name = '#{ params[:name] }',
        famous_for = '#{ params[:famous_for] }',
        year_born = #{ params[:year_born] },
        year_died = #{ params[:year_died] },
        born_in_brum = #{ params[:born_in_brum] },
        famous_brummy_rating = #{ params[:famous_brummy_rating] },
        image_url = '#{ params[:image_url] }'
    WHERE id = #{ params[:id] };
    "

    db_query(new_sql)

    redirect "/famous_brummies/#{ params[:id] }" # go to show page for edited item

end

# --DELETE--

get '/famous_brummies/:id/delete' do
    
    db_query "DELETE FROM famous_brummies WHERE id = #{ params[:id] } ;"

    redirect '/famous_brummies'

end