Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #---- Magic 8 Ball ----#
  root to: 'magic#get_magic'
  get '/magic'  => 'magic#do_magic'

 #---- Guess Number  ----#
  get '/guess'  => 'guess#guess_number'
  get '/guess/number' => 'guess#guessing_number'

  #---- RPS  ----#
  get '/rps'  => 'rps#rps_index'
  get '/rps/check' => 'rps#rps_check'
end