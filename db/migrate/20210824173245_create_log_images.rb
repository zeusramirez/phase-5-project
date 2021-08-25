class CreateLogImages < ActiveRecord::Migration[6.1]
  def change
    create_table :log_images do |t|
      t.belongs_to :update, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
