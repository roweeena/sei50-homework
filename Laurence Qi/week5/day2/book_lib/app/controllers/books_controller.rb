class BooksController < ApplicationController
    def index 
    end

    def show 
        @book = Book.find(params[:id])
    end
    
    def new
        @book = Book.new
    end

    def create
        
    end
end