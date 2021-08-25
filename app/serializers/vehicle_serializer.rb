class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :year, :mileage, :make, :model, :category, :bio, :name, :user_id
  has_many :images
  has_many :updates
  has_many :log_images, through: :updates
  # has_many :followings, serializer: FollowingSerializer
end
