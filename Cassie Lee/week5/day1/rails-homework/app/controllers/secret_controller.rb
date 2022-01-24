class SecretController < ApplicationController

    def number_input
        
        @secret_num = (1..10).to_a.sample
        @user_num = params[:answers].to_i
       
        p secret_num
        p user_num

        if @user_num == @secret_num
            @message = "congrats"
        else
            @message = "Try again"
        end
        
    end

    def number_results
    end
end