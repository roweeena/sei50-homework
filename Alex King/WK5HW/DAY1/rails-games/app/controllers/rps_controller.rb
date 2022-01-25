class RpsController < ApplicationController

    def answer 
        @choice = params[:choice] 
        choices = ["SCISSOR", "PAPER", "ROCK"] 
        where = choices.index(@choice) 
        @win_if = choices[where - 1] # pc win if here
        @pc_choice = choices.sample
    end

end