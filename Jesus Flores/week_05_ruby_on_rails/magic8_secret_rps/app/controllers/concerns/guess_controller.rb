class GuessController < ApplicationController
  
    def guessing_number
        @number = rand(1...10) 
        @guess = params[:guess_number].to_i
        @message = @number == @guess  ? "You won!" : "Sorry you lost!"
    end
    
end