class Vehicle < ApplicationRecord
    has_many :followings
    has_many :updates, dependent: :destroy
    has_many :images, dependent: :destroy
    has_many :log_images, through: :updates


    validates :year, length: {is:4, less_than_or_equal_to:2023, greater_than_or_equal_to:1886}
    validates :mileage, numericality: {less_than:1999999, greater_than_or_equal_to:0}
    validates :name, presence: true
    validates :bio, presence: true
    validates :year, presence: true
    validates :mileage, presence: true
    validates :model, presence: true
    validates :make, presence: true
    validates :user_id, presence: true
    validates :category, presence: true
end
