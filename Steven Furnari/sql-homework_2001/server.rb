require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'colorize'

def db_query sql

    puts '=============================================================='
    puts sql.green 
    puts '==============================================================
    '
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results
end

get '/' do
    erb :home
end

# CREATE
get '/teams/new' do
    erb :new
end

post '/teams' do
    insert_sql = "
    INSERT INTO teams (team_name, home_ground, state, founded, premierships, still_active, club_logo_url)
        VALUES (
            '#{params[:team_name]}',
            '#{params[:home_ground]}',
            '#{params[:state]}',
            #{params[:founded]},
            #{params[:premierships]},
            #{params[:still_active]},
            '#{params[:club_logo_url]}'
        );        
    "
    db_query insert_sql
    
    redirect '/teams'
end

# READ
get '/teams' do
    @results = db_query 'SELECT * FROM teams;'
    erb :teams
end

get '/teams/:id' do

    @team = db_query "SELECT * FROM teams WHERE id = #{params[:id]};"
    @team = @team.first
    erb :show
end

# UPDATE
get '/teams/:id/edit' do
    
    @team = db_query "SELECT * FROM teams WHERE id = #{params[:id]};"
    @team = @team.first
    
    erb :edit
end

post '/teams/:id' do
    update_sql = "
    UPDATE teams SET
        team_name = '#{params[:team_name]}',
        home_ground = '#{params[:home_ground]}',
        state = '#{params[:state]}',
        founded = #{params[:founded]},
        premierships = #{params[:premierships]},
        still_active = #{params[:still_active]},
        club_logo_url = '#{params[:club_logo_url]}'
    WHERE id = #{params[:id]};        
"
db_query update_sql
redirect "/teams/#{params[:id]}"
end

# DELETE
get '/teams/:id/delete' do
    db_query "DELETE FROM teams WHERE id = #{params[:id]};"

    redirect '/teams'
end