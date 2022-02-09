class LeaguesController < ApplicationController
  
  def new
      @league = League.new
  end

  def create
    #ActiveModel::ForbiddenAttributesError rails prevents thise since ppl can add new fields from the frontend and devtools
    #instead  we hajve to create a 'bouncer/doorman' of the only allow fields in the form
    #we have to use Strong Params 
   League.create  league_params
   redirect_to leagues_path
  end

  def index
    @result = League.all
  end

  def show
      @result = League.find params[:id]
  end

  def edit
    @league = League.find(params[:id])
  end

  def update
    league = League.find params[:id]
    league.update league_params
    redirect_to leagues_path
  end

  #Private methods are only visibile to its own class even if you have an instance in other class
  private def  league_params 
    #If you leave one parameter out it won't save into the DB
    params.require(:league).permit(:name,:location,:season,:date_start)

  end 

 

end

