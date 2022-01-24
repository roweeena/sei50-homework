Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'home#home'

  get '/magic8ball' => 'magic#home'

  get '/magic8ball/answer' => 'magic#answer'

  get '/secretnumber' => 'secret#home'

  get '/secretnumber/guess' => 'secret#guess'

  get '/rps' => 'rps#home'

  get '/rps/:throw' => 'rps#result'
end
