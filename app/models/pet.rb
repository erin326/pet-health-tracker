class Pet < ApplicationRecord
    has_one_attached :pet_image 
    belongs_to :user
    validates :name, presence: true
    has_one :health_logs
    has_many :events 

    
end
