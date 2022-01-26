class SecretController < ApplicationController

    def number_input
        
       
    end

    def number_results
        @secret_num = rand(10)
        if params[:answers] == @secret_num
            @message = "congrats"
        else
            @message = "Try again"
        end
        
    end
end