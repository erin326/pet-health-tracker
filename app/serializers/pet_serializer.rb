class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :type_of_pet, :sex, :age, :weight, :health_issues, :pet_image
  has_one :user

  def pet_image
    rails_blob_path(object.pet_image, only_path: true) if object.pet_image.attached? 

  end

end
