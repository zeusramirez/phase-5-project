class LogImage < ApplicationRecord
    belongs_to :updt, foreign_key: "update_id", class_name: "Update"
end
