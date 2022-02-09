Rails.application.routes.draw do
 

get '/magicball' => 'magicball#home'

get '/magicball/results' => 'magicball#results'

get '/secretnum' => 'secretnum#home'

get '/secretnum/results' => 'secretnum#results'

end
