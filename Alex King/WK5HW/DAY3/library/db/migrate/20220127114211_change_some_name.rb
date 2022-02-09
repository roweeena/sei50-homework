class ChangeSomeName < ActiveRecord::Migration[5.2]
  def change
      rename_column :books, :writer_id, :author_id
  end
end
