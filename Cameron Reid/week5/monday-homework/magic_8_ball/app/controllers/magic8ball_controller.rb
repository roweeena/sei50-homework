class Magic8ballController < ApplicationController

  def home
  end

  def answer
    answers = ["It is certain.", "It is decidedly so.", " Without a doubt.", " Ask again later.",  "Cannot predict now.", "Don't count on it.", "Outlook not so good."]
    @answer = answers[rand(7)]
    @question = "#{params[:question]}"

  end

end

