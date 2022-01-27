class DriversController < ApplicationController
  def new
    @driver = Driver.new
  end

  def create
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
  end

  def destroy
  end
end
