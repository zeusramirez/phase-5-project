class UpdateSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_id, :title, :update_type, :mileage, :difficulty, :price, :description
end
