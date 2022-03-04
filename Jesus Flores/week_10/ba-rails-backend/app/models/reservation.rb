class Reservation < ApplicationRecord
    belongs_to :user
    belongs_to :flight
    
    validates :row, uniqueness: {scope: [:col, :flight_id]}
en
