class UpdateSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_id, :title, :type, :mileage, :difficulty, :price, :description
end
