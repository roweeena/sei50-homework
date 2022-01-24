Rails.application.routes.draw do
  
  root to: 'pages#home'

  get '/magic8ball' => 'balls#question'
  get '/magic8ball/answer' => 'balls#answer'

  get '/secretnumber' => 'numbers#choice'
  get '/secretnumber/result' => 'numbers#result'

  get '/rock_paper_scissors' =>'rps#selection'
  get '/rock_paper_scissors/result' =>'rps#result'

end
