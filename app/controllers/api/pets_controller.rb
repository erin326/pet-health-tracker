class Api::PetsController < ApplicationController


    def index 
        user = User.find_by(id: session[:user_id])

        if user 
            render json: user.pets, include: :user
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
      
    end

    def create 
        user = User.find_by(id: session[:user_id])

        if user 
            pet = Pet.create(pet_params)
            user.pets << pet
            if pet.valid?
                render json: pet, include: :user, status: :created
            else
                render json: {errors: pet.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    private  

    def pet_params
        params.permit(:name, :age, :weight, :type, :health_issues, :sex)
    end
end 
