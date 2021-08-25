class CreateLogImages < ActiveRecord::Migration[6.1]
  def change
    create_table :log_images do |t|
      t.integer :log_id
      t.string :url

      t.timestamps
    end
  end
end
