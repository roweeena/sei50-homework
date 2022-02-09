class RpsController < ApplicationController
    def home

    end

    def result
        @player = params[:throw]
        @comp = ['rock', 'paper', 'scissors'].sample

       if @player == @comp
           @result = 'Tie'
       elsif (@player == 'rock' && @comp == 'scissors') || (@player == 'scissors' && @comp == 'paper') || (@player == 'paper' && @comp == 'rock')
           @result = 'Victory'
       else
           @result = 'Defeat'
       end
    end

end