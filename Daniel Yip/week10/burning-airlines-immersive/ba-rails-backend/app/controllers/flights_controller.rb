class FlightsController < ApplicationController

  def index
    render json: Flight.all
  end # index

  def search

    flights = Flight.where origin: params[:origin], destination: params[:destination]

    sleep 1

    render json: flights, include: {
      airplane: {
        only: [:name]
      }
    }
  end


  def show
    flight = Flight.find params[:id]
    
    render json: flight, include: {
      airplane: {},
      reservations: {
        only: [:row, :col, :user_id],
        include: {
          user: {
            only: [:name]
          }  
        } # user
      } # reservations
    } # include

  end


end
