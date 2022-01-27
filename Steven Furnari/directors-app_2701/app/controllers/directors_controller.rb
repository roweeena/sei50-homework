class DirectorsController < ApplicationController
  def new
    @director = Director.new
  end

  def create
    Director.create director_params

    redirect_to directors_path
  end

  def index
    @directors = Director.all
  end

  def show
    @director = Director.find params[:id]
  end

  def edit
    @director = Director.find params[:id]
  end

  def update
    director = Director.find params[:id]
    director.update director_params

    redirect_to director_path(params[:id])
  end

  def destroy
    Director.destroy params[:id]
    redirect_to directors_path  
  end

  private
  def director_params
    params.require(:director).permit(
      :name,
      :dob,
      :nationality,
      :bio,
      :photo
    )
  end

end
