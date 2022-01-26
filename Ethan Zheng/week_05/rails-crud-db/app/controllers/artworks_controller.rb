class ArtworksController < ApplicationController 
    
    def list_of_tags
        tags = []
        Artwork.all.each do |artwork|
            tags.concat artwork.tags.split(" ")
        end
        tags.uniq!
    end    

    # CREATE
    def new
        @artwork = Artwork.new
    end

    # READ
    def create
        Artwork.create(
            name: params[:artwork][:name],
            year: params[:artwork][:year],
            artist: params[:artwork][:artist],
            image_url: params[:artwork][:image_url],
            tags: params[:artwork][:tags]
        )

        redirect_to artworks_path
    end

    def index
        @artworks = Artwork.all
        @tags = list_of_tags
    end

    def show
        @artwork = Artwork.find params[:id]
        @tags = @artwork.tags.split(" ")
    end

    def tag
        @tags = list_of_tags
        @tag = params[:tag]
        @artworks_with_tag = []
        Artwork.all.each do |artwork|
            if artwork.tags.include? @tag
                @artworks_with_tag.push artwork
            end
        end 

    end


    # UPDATE
    def edit
        @artwork = Artwork.find params[:id]
    end

    def update
        artwork = Artwork.find params[:id]
        artwork.update(
            name: params[:artwork][:name],
            year: params[:artwork][:year],
            artist: params[:artwork][:artist],
            image_url: params[:artwork][:image_url],
            tags: params[:artwork][:tags] 
        )
        redirect_to artwork_path(params[:id])
    end



    # DELETE

    def destroy
        Artwork.destroy params[:id]
        redirect_to artworks_path
    end

end