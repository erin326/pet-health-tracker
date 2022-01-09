Rails.application.routes.draw do

  namespace :api do 
    # post "/login", to: "sessions#create"
    # resources :pets, only: [:index, :create]
    resources :health_tips, only: [:index]
    resources :pets, only: [:index, :create, :destroy, :update, :show]
    resources :health_logs, only: [:show]
    resources :events, only: [:index, :create, :show]
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'


    resources :photos, only: [:update]

  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
