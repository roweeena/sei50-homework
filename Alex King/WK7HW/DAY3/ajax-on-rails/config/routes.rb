Rails.application.routes.draw do
  
  # root to: 'dash#app'

  # SPA home route:
  get 'dash/app' => 'dash#app'

  # AJAX routes that return JSON data for axios

  get '/uptime' => 'dash#uptime'

  get '/cpuhog' => 'dash#cpu_hog'

  # Message MODEL API endpoints (still use CRUD conventions)
  get '/messages'     => 'messages#index'
  get '/messages/:id' => 'messages#show'

  # Custom route, not really CRUD
  get '/messages/search/:query' => 'messages#search'

end
