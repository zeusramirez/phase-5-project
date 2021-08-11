class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :year, :mileage, :make, :model, :category, :bio
end
