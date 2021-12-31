class EventsController < ApplicationController

    def create
        event = Event.create(params[:text])
        pet.events << event 
        render json: event 
    end
end
