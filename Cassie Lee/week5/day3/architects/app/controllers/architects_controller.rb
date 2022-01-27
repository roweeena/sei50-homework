class ArchitectsController < ApplicationController
  def new
    @architect = Architect.new
  end

  def create
    Architect.create architect_params

    redirect_to architects_path
  end

  def index
    @architects = Architect.all
  end

  def show
    @architect = Architect.find params[:id]
  end

  def edit
    @architect = Architect.find params[:id]
  end

  def update
    architect = Architect.find params[:id]
    architect.update architect_params

    redirect_to architect_path( params[:id])
  end

  def destroy
    Architect.destroy params[:id]
    redirect_to architect_path
  end


  private

  def architect_params
    params.require(:architect).permit(:name, :dob, :nationality, :image)

  end


end
