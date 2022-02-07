class PetsController < ApplicationController
  
  #homepage
  def index 
    @pets = Pet.all
  end

  def show
    @pet = Pet.find params[:id] 
  end

  def new
    @pet = Pet.new
  end

  def create
    Pet.create(
      name: params[:pet][:name],
      age: params[:pet][:age],
      vaccinated: params[:pet][:vaccinated],
      favourite_food: params[:pet][:favourite_food],
      image_url: params[:pet][:image_url],
    )

    redirect_to pets_path
  end

  def edit
    @pet = Pet.find params[:id]

  end

  def update  
    pet = Pet.find params[:id]
    pet.update(
      name: params[:pet][:name],
      age: params[:pet][:age],
      vaccinated: params[:pet][:vaccinated],
      favourite_food: params[:pet][:favourite_food],
      image_url: params[:pet][:image_url],
    )
    redirect_to pet_path( params[:id] )
  end


  def destroy
    Pet.destroy params[:id]
    
    redirect_to pets_path
  end

end