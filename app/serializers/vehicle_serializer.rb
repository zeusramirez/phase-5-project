class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :year, :mileage, :make, :model, :category, :bio, :name, :user_id
  has_many :updates
end
