class MagicController < ApplicationController
  def question
  end

  def answer
    answers = ["It is certain.",
               "It is decidedly so.",
               "Without a doubt.",
               "Yes definitely.",
               "You may rely on it.",
               "Don't count on it.",
               "My reply is no.",
               "My sources say no.",
               "Outlook not so good.",
               "Very doubtful."]
    question =params[:question]
    @answer = answers[rand(0..9)] if !question.empty?
    
  end

end
