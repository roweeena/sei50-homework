Rails.application.routes.draw do

  root to: 'games#home'

  get '/magic8ball' => 'magic8ball#home'

  get '/magic8ball/answer' => 'magic8ball#result'

  get '/magic8ball/:question' => 'magic8ball#result'

  get '/secretnumber' => 'secretnumber#home'

  get '/secretnumber/result' => 'secretnumber#result'

  get '/rps' => 'rps#home'

  get '/rps/result' => 'rps#result'

  get '/rps/:fighter' => 'rps#result'

end
