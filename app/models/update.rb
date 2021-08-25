class Update < ApplicationRecord
    belongs_to :vehicle
    has_many :log_images, dependent: :destroy
    

    validates :vehicle_id, presence: true
    validates :title, presence: true
    validates :update_type, presence: true
    validates :mileage, presence: true
    validates :mileage, numericality: {less_than:1000000, greater_than:0}
    validates :difficulty, numericality: {less_than_or_equal_to:10, greater_than_or_equal_to:0}
    validates :difficulty, presence: true 
    validates :price, presence: true
    validates :description, presence: true

  
end
