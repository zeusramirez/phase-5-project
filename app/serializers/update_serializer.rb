class UpdateSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_id, :title, :update_type, :mileage, :difficulty, :price, :description
  has_many :log_images 
    # def image_url
    #   object.image_url.map do |url|
    #     ::LogImageSerializer.new(url).attributes
    #   end
    # end
end
