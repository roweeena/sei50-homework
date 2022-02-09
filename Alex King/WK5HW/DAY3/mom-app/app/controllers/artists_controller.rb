class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    Artist.create artist_params
    redirect_to artists_path
  end

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params

    redirect_to artist_path(params[:id])
  end

  def destroy
    Artist.destroy params[:id]
    redirect_to artists_path
  end


  # "private" methods in a class are ONLY visible
  # to other methods that are also in the class
  #   - in Rilas, a private controller method is 
  # one that can be used by the actions (a method
  # that is a handler for a route), but is not
  # itself an action
  private 

  def artist_params
    params.require(:artist).permit(:name,:nationality,:dob,:period,:roundness,:image,:bio)
  end # artist_params() 

end # class ArtistsControllers
