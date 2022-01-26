class SecretsController < ApplicationController # TODO: figure out why the value isn't showing as true

    def initialize
        @correct_number = rand(1..2)
    end
    
    def home
    end

    def guess
        @is_correct_guess = params[:guess] == @correct_number.to_s
    end
        
end

