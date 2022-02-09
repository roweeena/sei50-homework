Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'games#home'

  get '/magic8ball/' => 'magic#question'

  get '/secret' => 'secret#guess'

  get '/secret/:id' => 'secret#answer'

  get '/rps' => 'rps#guess'

  post '/rps' => 'rps#answer'

end
