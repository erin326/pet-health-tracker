class Api::HealthTipsController < ApplicationController

    def index 
        health_tips = HealthTip.all 
        render json: health_tips
    end
   
end