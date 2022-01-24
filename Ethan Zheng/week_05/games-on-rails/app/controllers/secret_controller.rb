class SecretController < ApplicationController
    
    def home
    end

    def guess
        @secret = rand 10
        @guess = params[:guess]
    end

end

