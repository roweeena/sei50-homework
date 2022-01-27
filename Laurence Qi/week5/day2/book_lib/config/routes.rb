Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # C
  # form for crud
  get '/books/new' => 'books#new', as: '/new_book'
  post '/books' => 'books#create', as: '/create'

  # R
  # all books
  get '/books' => 'books#index' 

  # one book
  get '/book/:id' => 'books#show', as: '/book'

  # U 
  get '/books/:id/edit' => 'books#edit', as: 'edit_book'
  patch 'books/:id' => 'books#update'

  # D
  


end
