
require 'sinatra'
require 'sinatra/reloader'


get '/' do
    # "Hello from the calculator root route"
    erb :intro
end

get '/about' do
    erb :calc_about
end

# Matches routes like '/calc/50/+/30'
get '/calc/:first_num/:op/:second_num' do

    # "here is: #{params}"


    @first_num = params[:first_num].to_i
    @op = params[:op]
    @second_num = params[:second_num].to_i

    
    # p 'first_num', @first_num
    
    # @first_num + @first_num
    
    @result = case @op
    when '+' then @first_num + @second_num
    when '-' then @first_num - @second_num
    when '*' then @first_num * @second_num
    when 'div' then @first_num / @second_num
    end 
    
    erb :calc_functions 

    # "#{@first_num} #{@op} #{@second_num} = #{@result}"
end #get calc example



# Show the blank calculator form
get '/calc/form' do

    erb :form
end



# Above form submits to this route, white 
# does calculations and shows results in a template 

get '/calc/results' do
    @first_num = params[:first].to_i
    @op = params[:operator]
    @second_num = params[:second].to_i

    @result = case @op
    when '+' then @first_num + @second_num
    when '-' then @first_num - @second_num
    when '*' then @first_num * @second_num
    when '/' then @first_num / @second_num
    end 
    
    erb :calc_functions 
#  "params: #{params}"
end # calc results
