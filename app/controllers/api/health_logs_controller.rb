class HealthLogsController < ApplicationController


    
    def show 
        change = HealthLog.find(params[:id])
        render json: change, only: [:changes]
    end
end
