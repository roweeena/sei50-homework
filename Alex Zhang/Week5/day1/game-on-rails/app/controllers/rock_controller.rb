class RockController < ApplicationController
  def home
  end

  def result
    choices = { 1 => "rock", 2 => "paper", 3 => "scissors" }
    @computer = choices[rand(1..3)]
    @user = params[:throw]
    if @computer == @user
      @print_result = "Tie"
    else
      if @computer == "rock"
        if @user == "scissors"
          @print_result = "You lose"
        else
          @print_result = "You win"
        end
      end
      if @computer == "paper"
        if @user == "scissors"
          @print_result = "You win"
        else
          @print_result = "You lose"
        end
      end
      if @computer == "scissors"
        if @user == "paper"
          @print_result = "You lose"
        else
          @print_result = "You win"
        end
      end
    end
  end
end
