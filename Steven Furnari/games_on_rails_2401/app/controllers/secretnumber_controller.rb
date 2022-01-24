class SecretnumberController < ApplicationController

    def home
    end

    def result
        @answer = rand(1..10).to_s
        guess = params[:guess]

        if guess == @answer
            @result = "YOU WIN! Congratulations on picking the correct number!"
        else
            @result = "Incorrect, the secret number was: #{@answer}"
        end
    end

end