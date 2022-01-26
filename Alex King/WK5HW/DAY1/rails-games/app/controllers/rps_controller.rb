class RpsController < ApplicationController

    def answer
        @choice = params[:choice]
        choices = ["SCISSOR", "PAPER", "ROCK"]
        where = choices.index(@choice) 
        @win_if = choices[where - 1]
        @pc_choice = choices[rand(3)]
    end


end