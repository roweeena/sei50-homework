Rails.application.routes.draw do
  root to: "proxy#index"

  get '/fetch' => "proxy#fetch"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
