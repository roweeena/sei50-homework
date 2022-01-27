class OwnersController < ApplicationController
  def new
    @owner = Owner.new
  end

  def create
    Owner.create owner_params
    redirect_to owners_path
  end

  def index
    @owners = Owner.all
  end

  def show
    @owner = Owner.find params[:id]
  end

  def edit
    @owner = Owner.find params[:id]
  end

  def update
    owner = Owner.find params[:id]
    owner.update owner_params

    redirect_to owner_path
  end

  def destroy
    Owner.destroy params[:id]
    redirect_to owners_path
  end

  private 
  
  def owner_params
    params.require(:owner).permit(:name,:age,:hometown,:pokemon_owned, :champion, :image)
  end


end
