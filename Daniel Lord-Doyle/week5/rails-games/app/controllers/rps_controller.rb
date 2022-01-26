class RpsController < ApplicationController

    def guess
    end

    def answer
        options = ['rock','paper','scissors']
        @ai_throw = options.sample
        @guess = params[:guess]
        
        game = {
            'rock' => { #Player guess
                'scissors' => 'win', #AI Guess
                'paper' => 'lose',
                'rock' => 'draw'
            },
            'paper' => {
                'rock' => 'win',
                'paper' => 'draw',
                'scissors' => 'lose'
            },
            'scissors' => {
                'rock' => 'lose',
                'paper' => 'win',
                'scissors' => 'draw'
            }
    }

    @result = game[@guess][@ai_throw]

    end

end