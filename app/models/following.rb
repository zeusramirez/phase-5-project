class Following < ApplicationRecord
    belongs_to :user
    belongs_to :vehicle

    validates :vehicle_id, uniqueness: {scope: :id, message:"Already following this project"}
    validates :user_id, presence: true
end
