class Flight < ApplicationRecord
    #establish_connection "string or env variable of your db name"
    belongs_to :airplane
    has_many :reservations
    has_many :users, through: :reservations

end
