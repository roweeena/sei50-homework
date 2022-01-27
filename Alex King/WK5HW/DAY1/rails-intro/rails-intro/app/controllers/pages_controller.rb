
class PagesController < ApplicationController


    # def say_hi
    #     puts "hello"
    #     "HELLO FROM SERVER" # in Sinatra, this would output in the browser
    # end # say_hi()



    def haha

        @title = 'Dogs Playing Poker'
    end # haha()
    
    def greet
        @recipient = params[:person]
    end

end # class PagesController
