class MoviesController < ApplicationController
  def new
    @movie = Movie.new
  end

  def create
    Movie.create movie_params
    redirect_to movies_path
  end

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find params[:id]
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie_path(params[:id])
  end

  def destroy
    movie.destroy params[:id]
    redirect_to movies_path
  end

  private
  def movie_params
    params.require(:movie).permit(
      :title,
      :director_id,
      :released,
      :boxoffice,
      :description,
      :image
    )
  end
end
