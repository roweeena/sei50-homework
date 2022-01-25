class MagicController < ApplicationController

    def question
        @question = params[:question]
        answers = ['Yeah nah', 'Nah mate', 'Feck oath mate']
        @answer = answers.sample
    end

    def answer
    end

end