class Students < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.text :email
      t.text :phone_number
      t.text :address 
      t.integer :year
      end 
  end
end
