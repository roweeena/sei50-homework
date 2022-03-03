class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :flight

  validates :row, presence: true, uniqueness: {scope: :col}
  validates :col, presence: true, uniqueness: {scope: :row}

end
