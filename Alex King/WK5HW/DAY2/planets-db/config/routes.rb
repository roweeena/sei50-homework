Rails.application.routes.draw do

  # CREATE --------------------------------------------------
  
  # 1. Blank form
  # ROUTE: GET /planets/new
  # CONTROLLER ACTION: planets#new
  # TEMPLATE: new.html.erb
  # AR QUERY: n/a
  get '/planets/new' => 'planets#new', as: 'new_planet'

  # 2. Form submits here, save to DB, redirect
  # ROUTE: POST /planets 
  # CONTROLLER ACTION: planets#create 
  # TEMPLATE: n/a (redirect)
  # AR QUERY: Planet.create(param field here)
  post '/planets' => 'planets#create'

  # READ --------------------------------------------------
  
  # a. Index page, i.e. list every row of the 'planets' table
  # ROUTE: GET /planets
  # CONTROLLER ACTION: planets#index
  # TEMPLATE: app/views/planetsindex.html.erb
  # AR QUERY: Planet.all
  get '/planets' => 'planets#index'


  # b. Show page, i.e. details about one row (planet) by ID 
  # ROUTE: GET /planets/:id
  # CONTROLLER ACTION: planets#show
  # TEMPLATE show.html.erb
  # AR QUERY: Planet.find params[:id]
  get '/planets/:id' => 'planets#show', as: 'planet'
                                        # gives us 'planet_path(ID_HERE)

  # UPDATE --------------------------------------------------
  
  # 1, Show pre-filled edit form
  # ROUTE: GET /planets/:id/edit
  # CONTROLLER ACTION: planets#edit
  # TEMPLATE: edit.html.erb
  # AR QUERY: Planet.find params[:id]
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'


  # 2. Form sbmits to here, do DB update, redirect
  # ROUTE POST /planets/:id   OR  PATH will work too in Rails
  # CONTROLLER ACTION: planets#update
  # TEMPLATE: n/a (redirect )
  patch '/planets/:id' => 'planets#update'


  # DELETE --------------------------------------------------
  # Just perform destroy by ID, and redirect 
  # ROUTE: GET /planets/:id/delete
  # CONTROLLER ACTION: planets#destroy
  # TEMPLATE: n/a (redirect)
  # AR QUERY: Planet.destroy params[:id]
  get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet'

end
