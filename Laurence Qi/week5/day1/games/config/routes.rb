Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/magic_ball' => 'magicballs#home'
  get '/magic_ball/query' => 'magicballs#question'
  
  get '/secret_number' => 'secrets#home'
  get '/secret_number/guess' => 'secrets#guess'

  get '/rps' => 'rockpaperscissors#home'
  get '/rps/:choice' => 'rockpaperscissors#results'

end
