class Vehicle < ApplicationRecord
    has_many :updates
    has_many :followings
end
