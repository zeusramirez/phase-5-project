Rails.application.routes.draw do
  
  resources :followings
  resources :updates
  resources :vehicles
  resources :users, except: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # added routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
 
  post "/signup", to: "users#create"
  get "/getvehicles", to: "users#vehlist"
  get "/getfollows", to: "users#followlist"


  post "/addvehicle", to: "vehicles#create"
  # delete "/delvehicle", to: "vehicles#destroy"
  post "/follow", to: "followings#create"
  delete "/unfollow", to: "followings#destroy"

  post "/addlog", to: "updates#create"
end
