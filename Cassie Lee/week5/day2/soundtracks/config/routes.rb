Rails.application.routes.draw do

  #create new
  get '/soundtracks/new' => 'soundtracks#new', as: 'new_soundtrack'
  #form submission-redirect to index 
  post '/soundtracks' => 'soundtracks#create'


    # home root 
  root :to => 'soundtracks#home'

    # index page - list of soundtrack table
  get '/soundtracks' => 'soundtracks#index'
    # details of index page 
  get '/soundtracks/:id' => 'soundtracks#show', as: 'soundtrack'

  #edit data
  get '/soundtracks/:id/edit' => 'soundtracks#edit', as: 'edit_soundtrack'
  #update data
  patch '/soundtracks/:id' => 'soundtracks#update'
  #delete
  get '/soundtracks/:id/delete' => 'soundtracks#destroy', as: 'destroy_soundtrack'


end
