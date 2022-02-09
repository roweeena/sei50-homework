class SecretController < ApplicationController

    def form 
    end

    def guess 
    result=rand(1..10)
        if params[:number] ==result
            @message="The result is #{result}, you guessed #{params[:number]}, you are right"
        else
            @message="The result is #{result}, you guessed #{params[:number]}, you are wrong"
        end
    end

end