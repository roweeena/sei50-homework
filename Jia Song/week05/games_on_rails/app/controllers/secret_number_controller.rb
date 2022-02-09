class SecretNumberController < ApplicationController
  $random_num = rand(1..10)

  def show

    user_input = params[:user_input]

    if $random_num > user_input.to_i
      @result = "Higher"
    elsif $random_num < user_input.to_i
      @result = "Lower"
    else
      @result = "You found it!"
    end
  end

end