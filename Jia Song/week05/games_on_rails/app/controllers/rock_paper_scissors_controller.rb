class RockPaperScissorsController < ApplicationController
  $case = {
    "rock" => {
      "rock" => "draw",
      "paper" => "You lose",
      "scissors" => "You win"
    },
    "paper" => {
      "rock" => "You win",
      "paper" => "draw",
      "scissors" => "You lose"
    },
    "scissors" => {
      "rock" => "You lose",
      "paper" => "You win",
      "scissors" => "draw"
    },
  }
  def show
    @user_input = params[:user_input]
    answer_arr = ["rock", "paper", "scissors"]
    @random_answer = answer_arr[rand(answer_arr.length)]

    @result = $case[@user_input][@random_answer]
  end
end