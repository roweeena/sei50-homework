class MagicballController < ApplicationController

  def home
  end # end def home

  def results
    array = ["It is certain.",
               "It is decidedly so.",
               "Without a doubt.",
               "Yes definitely.",
               "You may rely on it.",
               "Don't count on it.",
               "My reply is no.",
               "My sources say no.",
               "Outlook not so good.",
               "Very doubtful."]
    @answers = array[0..9].to_a.sample          
   
  end # end of def results

end # end of class
