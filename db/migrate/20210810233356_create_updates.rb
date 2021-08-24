class CreateUpdates < ActiveRecord::Migration[6.1]
  def change
    create_table :updates do |t|
      t.integer :vehicle_id
      t.string :title
      t.string :update_type
      t.integer :mileage
      t.integer :difficulty
      t.integer :price
      t.text :description

      t.timestamps
    end
  end
end
