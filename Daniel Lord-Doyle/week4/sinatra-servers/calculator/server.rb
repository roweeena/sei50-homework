require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :intro
end

get '/about' do
    erb :about
end

# this form will get the calculation request and the form action will send to /calc/results
get '/calc/form' do
    erb :form
end

get '/calc/results' do
    
    @first_num = params[:first]
    @op = params[:operator]
    @second_num = params[:second]

    one = @first_num.to_f
    two = @second_num.to_f

    @result = case @op
    when '*'    then one * two
    when '+'    then one + two
    when '/'  then one / two
    when '-'    then one - two
    else
        'Not a valid argument
    end

    erb :calc_results

end

get '/calc/:first_num/:op/:second_num' do

    # params.to_s - this lets me see on screen

    @first_num = params[:first_num]
    @op = params[:op]
    @second_num = params[:second_num]

    one = @first_num.to_f
    two = @second_num.to_f

    @result = case @op
    when '*'    then one * two
    when '+'    then one + two
    when 'div'  then one / two
    when '-'    then one - two
    end

    # "#{one} #{@op} #{two} = #{@result}"

    erb :calc_results

end