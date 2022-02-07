class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    Book.create book_params
    redirect_to books_path
  end

  def edit
    @book = Book.find params[:id]
  end

  def show 
    @book = Book.find params[:id]
  end

  def destroy
    Book.destroy params[:id]
    redirect_to books_path
  end

  def book_params # !!!!!
    params.require(:book).permit(:title,:publish_date,:genre,:image,:bio,:author_id)
  end 
end
