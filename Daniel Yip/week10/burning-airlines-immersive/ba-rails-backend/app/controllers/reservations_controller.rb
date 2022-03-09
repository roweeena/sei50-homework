class ReservationsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    # binding.pry
    res = Reservation.create! reservation_params
    
    # sleep 0.2
    
    if res.persisted? 
      render json: res
    else
      render json: {error: 'Could not create reservation'}, status: 422
    end
    
    
  end


  private
  def reservation_params
    # params.require(:reservation)
      params.permit(:flight_id, :row, :col).merge(user_id: User.first.id )
  end

end
