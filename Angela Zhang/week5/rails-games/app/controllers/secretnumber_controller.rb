class SecretnumberController < ApplicationController

    def home
    end

   
    def guess 
        @numbers = [1,2,3,4,5,6,7,8,9,10]
        @user_pick =params[:user_guess].to_i
        @secret_number = @numbers.sample
        if @user_pick == @secret_number
            @message ="You guessed right!"
        else
            @message = "You guessed wrong!"
        end
    end   


end