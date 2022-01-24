class SnController < ApplicationController

    def answer
        @guess = params[:num].to_i
        @answer = rand(10).to_i
    end

end