class Reservation < ApplicationRecord
    belongs_to :user
    belongs_to :flight
    #Avoiding duplicate bookings
    validates :row, uniqueness: {scope: [:col, :flight_id]}
en
