# params[:first] params[:op] params[:second]
class CalculatorController < ApplicationController

    def do_calculation
        
        @first = params[:first].to_i
        @op = params[:op]
        @second = params[:second].to_i

        @answer = @first.send(@op, @second)

    end # do_calculation()

    def home
        
    end


end # class CalculatorController  
