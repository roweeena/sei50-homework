class RockpaperscissorsController < ApplicationController
    @plays = ['paper', 'rock', 'scissors']
    
    def home 
    end
    
    def results 
        @is_winner = @plays.sample = params[:choice]
    end
    
end