class RockpaperscissorsController < ApplicationController

    def home
    end


    def game 
        @sign = ["rock","paper","scissors"]
        @server = "paper"
        @user = params[:user_pick].downcase
       if @user == @server
        @message = "Its a Draw!"
       else
            if @user == "rock" && @server == "scissors"
                @message = "You Win!"
            elsif @user == "rock" && @server == "paper"
                @message= "You Lose!"
            elsif @user == "scissors" && @server == "paper"
                @message = "You Win!"
            elsif @user == "scissors" && @server == "rock"
                @message = "You Lose!"
            elsif @user == "paper" && @server == "scissors"
                @message = "You Lose!"
            elsif @user == "paper" && @server == "rock"
                @message = "You Win!"
            end
        end

    end

   
end # class Rockpaperscissors