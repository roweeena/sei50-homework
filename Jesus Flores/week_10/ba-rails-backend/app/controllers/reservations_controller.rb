class ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        reservation = Reservation.create(
            flight_id: params[:flight_id],
            user_id: params[:user_id],
            row: params[:row],
            col: params[:col],
            paid: true
        )
        if reservation.persisted?
            render json: reservation
          else
            render json: {error: "There was an error booking the reservation"}
          end
    end
end
