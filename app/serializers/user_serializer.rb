class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest
  has_many :vehicles
  has_many :followings
end
