class Pet < ApplicationRecord
    has_one_attached :pet_image 
    belongs_to :user
    validates :name, presence: true

    
end
