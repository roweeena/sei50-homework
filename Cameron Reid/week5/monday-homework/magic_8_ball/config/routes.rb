Rails.application.routes.draw do
  root to: 'magic8ball#home'

  get'/answer' => 'magic8ball#answer'
  
end
