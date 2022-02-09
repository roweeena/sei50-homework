class CreateSharks < ActiveRecord::Migration[5.2]
  def change
    create_table :sharks do |t|

      #this is like SQL database
      t.string  :name
      t.float   :size
      t.text    :color
      t.text    :habitat
      t.text    :image_url


    end # of table
  end # of def change
end # of class
