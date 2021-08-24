class Vehicle < ApplicationRecord
    has_many :updates, dependent: :destroy
    has_many :followings

    validates :year, length: {is:4}
    validates :mileage, numericality: {less_than:1000000, greater_than:0}
    validates :name, presence: true
    validates :bio, presence: true
    validates :year, presence: true
    validates :mileage, presence: true
    validates :model, presence: true
    validates :make, presence: true
    validates :user_id, presence: true
    validates :category, presence: true
end
