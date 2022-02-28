class FlightsController < ApplicationController

    def index
        render json: Flight.all
    end

    def search
        flights = Flight.where origin: params[:origin], destination: params[:destination]
        render json: flights, include:{
            airplane:{},
            reservations:{}
        }
    end

    def show
        flight = Flight.find(params[:id])
        render json: flight, include: {
            airplane: {},
            reservations: {
                only: [:row , :col],
                include: {
                    user: {
                         only: [:name]
                    }
                }
            },
        }
    end

end
