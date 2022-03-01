class FlightsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Flight.all, include:{
            reservations:{}
        }
    end # index

    def search
        
        flights = Flight.where origin: params[:origin], destination: params[:destination]

        render json: flights, include: {
            airplane: {
                only: [ :name ]
            },
            reservations:{

            }
        }

    end


    def show
        flight = Flight.find params[:id] 
        render json: flight, include: {
            airplane: {}, # "When you give me a flight, include the .airplane belongs_to association"
            reservations: {
                only: [:row, :col, :user_id ],
                include: {
                    user: {
                        only: [:name]
                    } # user
                } # include
            } # reservations
        } # top-level include for flight
    end # show 


    def book
        flight = Flight.find params[:id]
        newBooking = Reservation.create flight_id: flight.id, user_id: 25, row: params[:row], col: params[:col]
        p '******************************', newBooking
    end




end
