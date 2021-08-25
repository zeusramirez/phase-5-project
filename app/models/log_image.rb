class LogImage < ApplicationRecord
    belongs_to :log_update, class_name: "Update"
end
