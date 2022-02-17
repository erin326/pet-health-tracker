class Api::EventsController < ApplicationController


    def index 
        events = Event.all 
        render json: events
    end

    def create
        
        event = Event.create(event_params)
        
        # pet.events << event 

        
          render json: event, 
        #   serializer: EventSerializer,
           status: :created 
        # else 
        #     render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        # end
    end

    def show 
        event = Event.find(params[:id])
        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end
    
    private 

    def event_params 
        params.permit(:title, :pet_id, :start, :end)
    end

end
