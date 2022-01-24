class RpsController < ApplicationController

    def home
    end

    def result
        @cpu = ['rock', 'paper', 'scissors'].sample
        @fighter = params[:fighter]

        if (@fighter == "rock" && @cpu == "scissors") || (@fighter == "scissors" && @cpu == "paper") || (@fighter == "paper" && @cpu == "rock")
            @result = "YOU WIN! The #{@cpu} stood no chance against your #{@fighter}!"
        elsif (@fighter == "rock" && @cpu == "rock") || (@fighter == "paper" && @cpu == "paper") || (@fighter == "scissors" && @cpu == "scissors")
            @result = "DRAW!"
        else 
            @result = "YOU LOSE! The opponents #{@cpu} was too powerful for your #{@fighter}!"
        end
    
    end

end