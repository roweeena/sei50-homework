Rails.application.routes.draw do


 
  #CREATE #######################
  #ROUTE
  #CONTROLLER
  #TEMPLATE
  #ACTIVE RECORD (AR) QUERY: Shark.all
  get '/sharks/new' => 'sharks#new', as: 'new_shark'
  post '/sharks' => 'sharks#create'

  #READ   #######################
  #ROUTE
  #CONTROLLER
  #TEMPLATE
  #ACTIVE RECORD (AR) QUERY: Shark.all
  get '/sharks' => 'sharks#index'
  get '/sharks/:id' => 'sharks#show', as:'shark' # here as: 'shark' is to give you the path helper
  
  #UPDATE #######################
  #ROUTE
  #CONTROLLER
  #TEMPLATE
  #ACTIVE RECORD (AR) QUERY: Shark.find params[:id]
  get '/sharks/:id/edit' => 'sharks#edit', as:'edit_shark'
  patch '/sharks/:id' => 'sharks#update'
  
  
  
  #DELETE #######################
  get '/sharks/:id/delete' => 'sharks#destroy', as:'kill_shark'
end
