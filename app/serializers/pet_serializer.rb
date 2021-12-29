class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :type_of_pet, :sex, :age, :weight, :health_issues, :pet_image
  has_one :user

  def pet_image
    if object.pet_image.attached? 
      rails_blob_url(object.pet_image, only_path: true) 
    end
  end

end
