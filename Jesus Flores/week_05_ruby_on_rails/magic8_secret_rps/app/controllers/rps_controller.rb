class RpsController < ApplicationController
    

    def rps_check
        @p1 = params[:rps]
        @p2 = ['rock','paper','scissors'].sample
        wincondition = (@p1+@p2).to_sym
        @conditions = { rockpaper: 'paper', rockscissors: 'rock', paperscissors: 'scissors',
                        paperrock:  'paper',scissorspaper: 'scissors', scissorsrock: 'rock',
                        paperper: 'draw', scissorsscissors: 'draw', paperpaper: 'draw' } 
        @message = @conditions[wincondition]
        
    end

end