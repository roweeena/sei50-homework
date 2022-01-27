class TeamsController < ApplicationController
  def new
    @team = Team.new
  end

  def create
    Team.create  team_params
    redirect_to teams_path
  end

  def index
    @result = Team.all
  end

  def show
    @result = Team.find params[:id]
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    team = Team.find params[:id]
    team.update team_params()
    redirect_to teams_path
  end


  private def  team_params 
    #If you leave one parameter out it won't save into the DB
    params.require(:team).permit(:name,:players,:logo,:coach,:captain,:sponsor,:league_id)

  end 

end
