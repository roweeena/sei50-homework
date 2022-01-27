Rails.application.routes.draw do
  get 'companies/new'
  get 'companies/create'
  get 'companies/index'
  get 'companies/show'
  get 'companies/edit'
  get 'companies/update'
  get 'companies/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :companies
  resources :employees
  
end
