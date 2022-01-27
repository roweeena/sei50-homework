class BrandsController < ApplicationController

  def new
    @brand = Brand.new
  end

  def create
    Brand.create brand_params
    redirect_to brands_path
  end

  def index
    @brands = Brand.all
  end

  def show
    @brand = Brand.find params[:id]
  end

  def edit
    @brand = Brand.find params[:id]
  end

  def update
    brand = Brand.find params[:id]
    brand.update brand_params
    redirect_to brand_path(params[:id])
  end

  def destroy
    Brand.destroy params[:id]
    redirect_to brands_path
  end

  private
  def brand_params
    params.require(:brand).permit(:name, :year, :location, :image)
  end # of brands params


end# of class
