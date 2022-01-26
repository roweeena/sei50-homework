class SoundtracksController < ApplicationController

    def new
        @soundtrack = Soundtrack.new

    end

    def create
        Soundtrack.create(
            title: params[:soundtrack][:title],
            artists: params[:soundtrack][:artists],
            nomination: params[:soundtrack][:nomination],
            release: params[:soundtrack][:release],
            songs: params[:soundtrack][:songs],
            link_url: params[:soundtrack][:link_url],
            image_url: params[:soundtrack][:image_url]
        )

        redirect_to soundtracks_path
    end


    def home
        @soundtracks = Soundtrack.all
       
    end


    def index
        @soundtracks = Soundtrack.all
    end


    def show
        @soundtrack = Soundtrack.find params[:id]
    end

    def edit
        @soundtrack = Soundtrack.find params[:id]
    end

    def update
        soundtrack = Soundtrack.find params[:id]

        soundtrack.update(
            title: params[:soundtrack][:title],
            artists: params[:soundtrack][:artists],
            nomination: params[:soundtrack][:nomination],
            release: params[:soundtrack][:release],
            songs: params[:soundtrack][:songs],
            link_url: params[:soundtrack][:link_url],
            image_url: params[:soundtrack][:image_url]
        )

        redirect_to soundtrack_path(
            params[:id]
        )
    end

    def destroy

        Soundtrack.destroy params[:id]
        redirect_to soundtracks_path

    end


end #soundtractController 