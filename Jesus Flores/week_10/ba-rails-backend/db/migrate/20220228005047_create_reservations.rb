class CreateReservations < ActiveRecord::Migration[5.2]

  # def connection
  #   ActiveRecord::Base.establish_connection("string or env variable of your db name").connection
  # end

  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :user_id
      t.integer :row
      t.integer :col
      t.boolean :paid

      t.timestamps
    end
  end
end

#belongs_to and #has_one

# They essentially do the same thing, the only difference is what side of the relationship you are on. 
#If a User has a Profile, then in the User class you'd have has_one :profile and in the Profile class you'd have belongs_to :user



# has_many : Usually on the other side of the relinshipt you will also have a belongs_to (Rails will know based on the FK that certain amount of recods BELONGS to an user/author)



# has_many :this is association is often used to set up a many-to-many connection with another model. This association indicates that the declaring model can be matched with zero or more instances of another model by proceeding through a third model. 



# has_one : for instance GA-Table -> Courses-Table <-  Students



# has_and_belongs_to_many
