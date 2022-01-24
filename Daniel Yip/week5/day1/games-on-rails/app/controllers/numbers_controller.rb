class NumbersController < ApplicationController

  def result

    @choice = params[:choice].to_i
    @random = (rand 9) + 1
    @message = @random == @choice ? "You got it!" : "WRONG"

  end


end 