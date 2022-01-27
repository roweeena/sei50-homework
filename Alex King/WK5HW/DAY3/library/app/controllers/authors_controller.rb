class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end


  def new
    @author = Author.new
  end

  def create
    Author.create author_params
    redirect_to authors_path
  end


  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.find params[:id]
    author.update! author_params
    redirect_to author_path(params[:id])
  end


  def show
    @author = Author.find params[:id]
  end

  def destroy
    Author.destroy params[:id]
    redirect_to authors_path
    
  end



  def author_params # !!!!!
    params.require(:author).permit(:name,:dob,:image,:bio)
  end 


end
