class PsrController < ApplicationController 
  def home
  end

  def outcome 
    comp_moves = ["Rock", "Paper", "Scissors"]
    @comp = comp_moves[rand 2]
    @player = "#{params[:move]}"

    if @comp == @player
      @message = "We have a tie!"
    elsif
      @comp == "Rock" && @player == "Scissors" || @comp == "Scissors" && @player == "Paper" || @comp == "Paper" && @player == "Rock"
      @message = "The Computer won!"
    else
      @message = "Congrats you WON!"
    end  
  end


end
