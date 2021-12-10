class Api::PetsController < ApplicationController


    def index 
        render json: Pet.all
    end

    def create 
        pet = Pet.create(pet_params)

        render json: pet, status: :created
    end

    private  

    def pet_params
        params.permit(:name, :age, :weight, :type, :health_issues, :sex)
    end
end 
