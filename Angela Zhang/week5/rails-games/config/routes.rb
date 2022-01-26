Rails.application.routes.draw do

  root to: 'games#home'

  get '/magic8ball' => 'magic8ball#home'

  get '/magic8ball/replyback' => 'magic8ball#replyback'



  get '/secret_number' => 'secretnumber#home'

  get '/secret_number/guess' => 'secretnumber#guess'



  get '/rock_paper_scissors' => 'rockpaperscissors#home'

  get '/rock_paper_scissors/shoot' => 'rockpaperscissors#shoot'

end

