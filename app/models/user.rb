class User < ApplicationRecord
    has_secure_password 
    has_many :pets
    # has_many_attached :pet_images
    validates :username, presence: true, uniqueness: true 

end
