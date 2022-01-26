Rails.application.routes.draw do

get "/magic" =>'magic#question'
get "/magic/answer" => 'magic#answer'

get "/secret" => 'secret#form'
get "/secret/guess" => 'secret#guess'

get "/rock/" => 'rock#home'
get "/rock/:throw" =>'rock#result'
end
