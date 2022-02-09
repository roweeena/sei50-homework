Rails.application.routes.draw do
  root to: 'random#home'

  get'/answer' => 'random#answer'
  
end
