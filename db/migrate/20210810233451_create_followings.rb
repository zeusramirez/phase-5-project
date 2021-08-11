class CreateFollowings < ActiveRecord::Migration[6.1]
  def change
    create_table :followings do |t|
      t.integer :vehicle_id
      t.integer :user_id

      t.timestamps
    end
  end
end
