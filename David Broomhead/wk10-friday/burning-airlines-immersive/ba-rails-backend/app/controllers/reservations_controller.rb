class ReservationsController < ApplicationController

    skip_before_action :verify_authenticity_token
    FAKE_USER_ID = 28

    def create
        reservation = Reservation.create!(
            user_id: FAKE_USER_ID,
            flight_id: params[:flight_id],
            row: params[:row],
            col: params[:col]
        )

        if reservation.persisted?
            render json: reservation
        else
            render json: {error: true, details: reservation.errors.full_message}, status: 422
        end # else
    end # create
end # class ReservationsController
