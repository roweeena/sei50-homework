class Magic8ballController < ApplicationController
  $answer_arr = [
    "It is certain.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "It is decidedly so.",
    "Ask again later.",
    "My reply is no.",
    "Without a doubt.",
    "Better not tell you now.",
    "My sources say no.",
    "Yes definitely.",
    "Cannot predict now.",
    "Outlook not so good."
  ]

  def show
    @question = params[:user_input]
    random_num = rand($answer_arr.length + 1)
    @answer = $answer_arr[random_num]
  end
end
