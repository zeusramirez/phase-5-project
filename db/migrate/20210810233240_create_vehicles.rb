class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.integer :year
      t.integer :mileage
      t.string :name
      t.string :make
      t.string :model
      t.string :category
      t.text :bio
      t.integer :user_id

      t.timestamps
    end
  end
end
