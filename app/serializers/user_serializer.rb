class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest
  
  # has_many :followings, serializer: FollowingSerializer
  has_many :vehicles
end
