class MagicballsController < ApplicationController
    
    private def generate_response
        responses = ['yes', 'no', 'maybe', 'Nil', 'The universe says Yes!', 'The energy of the universe says No!']
        responses[rand(responses.length)] # return a random response
    end

    
    def home
    end
    

    def question
        @answer = generate_response
        # perform a random selection of the values from this.
    end
end

