require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_connection( query)
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute(query)
    db.close
    return results
end


get '/' do
    @results =  db_connection('select * from languages;')
    erb :home
end

#ADD VIEW
get '/add' do
    erb :add
end

#INSERT ITEM
post '/add' do
    begin
        query = "
            INSERT INTO languages (name, description, created, alive, created_by, logo)
            VALUES(
                '#{params[:name]}',
                '#{params[:description]}',
                 #{params[:created]},
                '#{params[:alive]}',
                '#{params[:created_by]}',
                '#{params[:logo]}'
                );"
        db_connection(query)
        message = 'New item added'
        redirect "/?message=#{message}" 
    rescue Exception => error
        message = 'There was an error inserting data data'
        redirect "/?message=#{message}"
    ensure
    puts error
    end
end

#GET ITEM
get '/update/:id' do
    @results =  db_connection("SELECT * FROM languages WHERE id=#{params[:id]};")
    @results = @results[0]
    erb :update
end

#UPDATE ITEM
post '/update/:id' do
    begin
        query = "
        UPDATE languages SET
            name = '#{params[:name]}',
            description = '#{params[:description]}',
            created_by = '#{params[:created_by]}',
            alive = '#{params[:alive]}',
            created = #{params[:created]},
            logo = '#{params[:logo]}'
        WHERE id = #{params[:id]};"
        db_connection(query)
        message = 'Data has been updated'
        redirect "/update/#{params[:id]}?message=#{message}" 
    rescue Exception => error
        message = 'There was an error updating data'
        redirect "/update/#{params[:id]}?message=#{message}" 
    ensure
    puts error
    end
end

#DELETE ITEM
get '/delete/:id' do
    begin
        query = "DELETE FROM languages WHERE id= #{params[:id]};"
        db_connection(query)
        message = 'Item has been deleted'
        redirect "/?message=#{message}" 
    rescue Exception => error
        message = 'There was an error deleting item'
        redirect "/?message=#{message}" 
    ensure
    puts error
    end
end



get '/view/:id' do
    @results =  db_connection("SELECT * FROM languages WHERE id=#{params[:id]};")
    @results = @results[0]
    erb :view_item
end
