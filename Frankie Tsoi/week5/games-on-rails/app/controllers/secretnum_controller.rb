class SecretnumController < ApplicationController

  def home
  end

  def results
    @answers = rand 100       
  end

end # end of class
