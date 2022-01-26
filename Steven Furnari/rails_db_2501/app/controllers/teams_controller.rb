class TeamsController < ApplicationController
    # CREATE
    def new
        @team = Team.new
    end

    def create
        Team.create(
            name: params[:team][:name],
            founded: params[:team][:founded],
            premierships: params[:team][:premierships],
            still_active: params[:team][:still_active],
            logo_url: params[:team][:logo_url]
        )

        redirect_to teams_path
    end

    # READ
    def index
        @teams = Team.all
    end

    def show
        @team = Team.find params[:id]
    end

    # UPDATE
    def edit
        @team = Team.find params[:id]
    end

    def update
        team = Team.find params[:id]
        team.update(
            name: params[:team][:name],
            founded: params[:team][:founded],
            premierships: params[:team][:premierships],
            still_active: params[:team][:still_active],
            logo_url: params[:team][:logo_url]
        )

        redirect_to team_path(params[:id])
    end
    
    # DELETE 
    def destroy
        Team.destroy params[:id]
        redirect_to teams_path
    end

end