class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :role
      t.float :salary
      t.integer :company_id
      t.integer :department_id

      t.timestamps
    end
  end
end
