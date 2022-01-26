class SecretController < ApplicationController

    def guess
    end

    def answer
        @randomNum = rand(1..10)
        @answer = params[:id].to_i
    end

end
