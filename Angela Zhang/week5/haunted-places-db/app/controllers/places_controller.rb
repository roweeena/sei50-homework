class PlacesController < ApplicationController
    def home
    end

    def new
        @place =Place.new
    end

    def create 
        Place.create(
            name: params[:place][:name],
            location: params[:place][:location],
            built: params[:place][:built],
            ghosts_num: params[:place][:ghosts_num],
            ghost_name: params[:place][:ghost_name],
            ghost_description: params[:place][:ghost_description],
            image_url: params[:place][:image_url]
        )
        redirect_to places_path
    end

    def index
        @places = Place.all
    end

    def show
        @place = Place.find params[:id]
    end

    def edit 
        @place = Place.find params[:id]
    end

    def update 
        place = Place.find params[:id]

        place.update(
            name: params[:place][:name],
            location: params[:place][:location],
            built: params[:place][:built],
            ghosts_num: params[:place][:ghosts_num],
            ghost_name: params[:place][:ghost_name],
            ghost_description: params[:place][:ghost_description],
            image_url: params[:place][:image_url]
            )
        redirect_to place_path( params[:id] )
    end

    def destroy 
        Place.destroy params[:id]
        redirect_to places_path
    end

end # class