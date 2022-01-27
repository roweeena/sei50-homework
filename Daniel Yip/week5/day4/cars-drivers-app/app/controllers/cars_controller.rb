class CarsController < ApplicationController
  def new
    @car = Car.new
  end

  def create
    Car.create car_params
    redirect_to cars_path
  end

  def index
    @cars = Car.all
  end

  def show
    @car = Car.find params[:id]
  end

  def edit
    @car = Car.find params[:id]
  end

  def update
    car = Car.find params[:id]
    car.update car_params
    redirect_to car_path car
  end

  def destroy
    Car.destroy params[:id]
    redirect_to cars_path
  end

  private

  def car_params
    params.require(:car).permit(:make, :model, :manufacture_date, :registered, :cool_factor, :image, :driver_id)
  end
end
