Rails.application.routes.draw do

  namespace :api do 
    # post "/login", to: "sessions#create"
    # resources :pets, only: [:index, :create]
    resources :health_tips, only: [:index]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
