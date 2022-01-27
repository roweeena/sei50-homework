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
        Book.create(
            title: params[:book][:title],
            author: params[:book][:author],
            image_url: params[:book][:image_url],
            rating: params[:book][:rating]
        )

        redirect_to books_path
    end

    def edit
        @book = Book.find params[:id]
    end
end