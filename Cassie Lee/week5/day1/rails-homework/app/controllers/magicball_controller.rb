class MagicballController < ApplicationController

    

    def input

    end

    def form
        answers = ['It is certain', 'Yes definitely', 'Most likely', 'Signs point to yes', 'Ask again later', 'Cannot predic now', 'My reply is no', 'Very doubtful'  ]

        num = rand(8)
        @result = answers[num]

    end



end #class MagicballController 