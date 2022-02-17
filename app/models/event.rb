class Event < ApplicationRecord
    belongs_to :pet  
    validates :title, presence: :true
end
