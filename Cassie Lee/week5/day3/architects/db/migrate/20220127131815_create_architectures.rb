class CreateArchitectures < ActiveRecord::Migration[5.2]
  def change
    create_table :architectures do |t|
      t.text :title
      t.text :province
      t.integer :architect_id

      t.timestamps
    end
  end
end
