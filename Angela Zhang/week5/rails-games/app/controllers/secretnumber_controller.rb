class SecretnumberController < ApplicationController

    def home
    end

    def guess
    end
    
   
    @numbers = [1,2,3,4,5,6,7,8,9,10]
    @secret_number = @numbers.sample
    
    

    def get_guess 
        @guess = params[:user_guess].to_i
        if @guess != @secret_number
            puts "wrong guess"
        else
            puts "congratulations"
        end
        
    end   

   raise 'hell'
end