Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# WHAT'S THE ROUTE?   WHAT CODE HANDLES IT?
# verb path           constoller # method name
  get '/hello'    => 'pages#say_hi'

  get '/hello/:person' => 'pages#greet' 

  get '/funny' => 'pages#haha'

  get '/calc' => 'calculator#form'

  get '/calc/:first/:op/:second' => 'calculator#do_calculation'

  get '/calc/answer' => 'calculator#do_calculation'
# form-based calculator

# 1. Blank form



# 2. From submits to this route (via action =""), do the calculation, show result


end




# DO NOT ADD ROUTES BELOW THE 'end'

