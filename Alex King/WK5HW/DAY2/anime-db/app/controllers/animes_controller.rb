class AnimesController < ApplicationController

    # CREATE
    def new
        @anime = Anime.new
    end # new()

    def create

        Anime.create(
            title: params[:anime][:title],
            release_year: params[:anime][:release_year],
            creator: params[:anime][:creator],
            episodes: params[:anime][:episodes],
            rating: params[:anime][:rating],
            poster: params[:anime][:poster]
        )
        redirect_to animes_path # i.e. index, /anime
    end


    # READ 

    def index
        @animes = Anime.all
    end

    def show
        @anime = Anime.find params[:id]
    end
    
    # UPDATE
    def edit
        @anime = Anime.find params[:id]
    end

    def update
        anime = Anime.find params[:id]
        anime.update(
            title: params[:anime][:title],
            release_year: params[:anime][:release_year],
            creator: params[:anime][:creator],
            episodes: params[:anime][:episodes],
            rating: params[:anime][:rating],
            poster: params[:anime][:poster]
        )
        redirect_to anime_path(params[:id])
    end
    # DESTROY
    def destroy
        Anime.destroy params[:id]
        redirect_to animes_path
    end

end