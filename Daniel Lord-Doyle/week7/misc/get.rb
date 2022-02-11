require 'httparty'

number_trivia = HTTParty.get 'http://numbersapi.com/random?json'

# a synchronous or blocking request, e.g. it pauses until the above line is ready / complete

puts number_trivia