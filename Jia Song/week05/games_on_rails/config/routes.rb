Rails.application.routes.draw do

  root to: 'magic8ball#index'

  get '/magic8ball' => 'magic8ball#index'
  get '/magic8ball/result' => 'magic8ball#show'

  get '/rock_paper_scissors' => 'rock_paper_scissors#index'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#show'

  get '/secret_number' => 'secret_number#index'
  get '/secret_number/result' => 'secret_number#show'
  
end
