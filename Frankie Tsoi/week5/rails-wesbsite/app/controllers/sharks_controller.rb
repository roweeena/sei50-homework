class SharksController < ApplicationController # here needs to inherit from application_controller.rb in controllers folder
  
#CREATE
  def new
    @shark = Shark.new
  end

  def create
    Shark.create(
      name: params[:shark][:name],
      size: params[:shark][:size],
      color: params[:shark][:color],
      habitat: params[:shark][:habitat],
      image_url: params[:shark][:image_url]
    )
    redirect_to sharks_path
  end


#READ
  def index
    @sharks = Shark.all
  end # def index

  def show 
    @shark = Shark.find params[:id]
  end

#UPDATE
  def edit
    @shark = Shark.find params[:id]
  end

  def update
    shark = Shark.find params[:id]
    shark.update(
      name: params[:shark][:name],
      size: params[:shark][:size],
      color: params[:shark][:color],
      habitat: params[:shark][:habitat],
      image_url: params[:shark][:image_url]
    )  
    redirect_to shark_path(params[:id])
  end

  #DELETE
  def destroy
    Shark.destroy params[:id]
    redirect_to sharks_path
  end


end # of class
