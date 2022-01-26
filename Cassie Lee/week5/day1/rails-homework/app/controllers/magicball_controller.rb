class MagicballController < ApplicationController

    def home
        
    end

    def input
        
    end

    def form
        answer = ['It is certain', 'Yes definitely', 'Most likely', 'Signs point to yes', 'Ask again later', 'Cannot predic now', 'My reply is no', 'Very doubtful'  ]

        num = rand(8)

        @result = answer[num]

    end



end #class MagicballController 