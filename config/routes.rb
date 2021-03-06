Rails.application.routes.draw do
  
  resources :log_images
  resources :images
  resources :followings
  resources :updates
  resources :vehicles
  resources :users, except: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # added new routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
 
  post "/signup", to: "users#create"
  get "/getvehicles", to: "users#vehlist"
  get "/getfollows", to: "users#followlist"


  post "/addvehicle", to: "vehicles#create"
  post "/follow", to: "followings#create"
  delete "/unfollow", to: "followings#destroy"

  post "/vehicleimage", to: "images#create"
  post "/logaddimage", to: "log_images#create"

  post "/addlog", to: "updates#create"
end
