Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


 get '/students/new' => 'students#new_student', as: 'new_student'
 post '/students/new' => 'students#create'
  


  get '/students'=> 'students#index'
  get '/students/:id' => 'students#get_student', as: 'student'


  get '/students/:id/edit' => 'students#edit', as: 'edit_student'
  patch '/students/:id' => 'students#update'
  

  get '/students/:id/delete' => 'students#delete', as: 'delete_student'

end

# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#   #CREATE###  
#   get '/planets/new' => 'planets#new', as: 'new_planet'
#   post '/planets'=> 'planets#create'

#   #READ###
#   get '/planets' => 'planets#index'
#   get '/planets/:id' => 'planets#find_planet', as: 'planet'
#                                                     #give us planet_path(ID_HERE)
#   #UPDATE###                      
#   get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'
#   #method patch would also work
#   patch '/planets/:id' => 'planets#update'

#   #DELETE####
#   get '/planets/:id/delete/' => 'planets#destroy', as: 'destroy_planet'

# end
