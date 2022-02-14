class PokemonsController < ApplicationController
  def new
    @pokemon = Pokemon.new
  end

  def create
    Pokemon.create pokemon_params
    redirect_to pokemons_path
  end

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find params[:id]
  end

  def edit
    @pokemon = Pokemon.find params[:id]
  end

  def update
    pokemon = Pokemon.find params[:id]
    pokemon.update pokemon_params

    redirect_to pokemon_path
  end

  def destroy
    Pokemon.destroy params[:id]
    redirect_to pokemons_path
  end

  private 
  
  def pokemon_params
    params.require(:pokemon).permit( :name,:level,:special_move,:image,:owner_id )
  end

end
