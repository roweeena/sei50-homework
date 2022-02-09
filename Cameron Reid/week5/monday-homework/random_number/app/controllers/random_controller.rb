class RandomController < ApplicationController

  def home
  end

  def answer
    @answer = rand(0..10)
    @user_guess = "#{params[:number]}".to_i
    
    if @answer ==  @user_guess
      @message = "Congrats you chose the same number!"
    else 
      @message = "Better luck next time"
    end  

  end

end

