class PaintingsController < ApplicationController


    # CREATE

        # form to make new painting
        def new
            @painting = Painting.new
        end

        def create
            Painting.create(
                name: params[:painting][:name],
                artist: params[:painting][:artist],
                price: params[:painting][:price],
                year: params[:painting][:year],
                url: params[:painting][:url]
            )
        redirect_to paintings_path
        end

    # READ

        def index
            @paintings = Painting.all
        end

        def show
            @painting = Painting.find params[:id]
        end
        

    # UPDATE

        def edit
            @painting = Painting.find params[:id]
        end

        def update
            painting = Painting.find params[:id]
            painting.update(
                name: params[:painting][:name],
                artist: params[:painting][:artist],
                price: params[:painting][:price],
                year: params[:painting][:year],
                url: params[:painting][:url]
            )
            redirect_to painting_path(params[:id])
        end
        

    # DELETE

    def destroy
        Painting.destroy params[:id]
        redirect_to paintings_path
    end # destroy


end # class PaintingsController

