class Api::PhotosController < ApplicationController

    def update 
        if params[:file]
            @pet.pet_image.attach(params[:file])
            photo = url_for(@pet.pet_image)
        end
        if @pet.update(photo: photo)
            render json: @pet, status: :ok
        end
    end
end
