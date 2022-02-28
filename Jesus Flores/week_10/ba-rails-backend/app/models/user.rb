class User < ApplicationRecord
    has_many :reservations
    has_many :flights, trough: :reservations
end
