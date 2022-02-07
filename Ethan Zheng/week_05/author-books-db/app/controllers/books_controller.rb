class BooksController < ApplicationController
  def new
    @book = Book.new
  end

  def create
    Book.create book_params
    redirect_to books_path 
  end

  def index
    @books = Book.all
  end

  def show
    @book = Book.find params[:id]
  end

  def edit
    @book = Book.find params[:id]
  end

  def update
    book = Book.find params[:id]
    book.update book_params
    redirect_to book_path(params[:id])
  end

  def destroy
    Book.destroy params[:id]
    redirect_to books_path
  end


  private
  
  def book_params
    params.require(:book).permit(:name, :date, :genre, :image, :author_id)
  end
end
