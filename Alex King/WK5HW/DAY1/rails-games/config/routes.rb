Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'

  get '/8ball' => 'ball#results'
  get '/8ball/answer' =>'ball#answer'


  get '/secretnumber' => 'sn#results'
  get '/secretnumber/answer' => 'sn#answer'

  get '/rockpaperscissors' => 'rps#results'
  get '/rockpaperscissors/shoot' => 'rps#answer'

end
