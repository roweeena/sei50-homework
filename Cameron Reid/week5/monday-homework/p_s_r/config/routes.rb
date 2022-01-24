Rails.application.routes.draw do
  root to: 'psr#home'

  get'/outcome' => 'psr#outcome' 
  
end
