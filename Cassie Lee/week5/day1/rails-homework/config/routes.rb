Rails.application.routes.draw do

  root to: 'games#home'

  get '/eightball' => 'magicball#input'
  get '/eightball/results' => 'magicball#form'

  get '/secret_number' => 'secret#number_input'
  get '/secret_number/results' => 'secret#number_results'

end
