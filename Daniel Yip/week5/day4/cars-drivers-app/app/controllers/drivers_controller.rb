class DriversController < ApplicationController
  def new
    @driver = Driver.new
  end

  def create
    Driver.create driver_params
    redirect_to drivers_path
  end

  def index
    @drivers = Driver.all
  end

  def show
    @driver = Driver.find params[:id]
  end
  
  def edit
    @driver = Driver.find params[:id]
  end

  def update
    driver = Driver.find params[:id]
    driver.update driver_params
    redirect_to driver_path params[:id]
  end

  def destroy
    Driver.destroy params[:id]
  end

  private

  def driver_params
    params.require(:driver).permit(:name, :dob, :licenced, :image)
  end

  


end
