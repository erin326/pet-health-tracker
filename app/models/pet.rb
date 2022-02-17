class Pet < ApplicationRecord
    belongs_to :user
    has_one :health_log
    has_many :events 
    has_one_attached :pet_image 

    validates :name, presence: true

end
