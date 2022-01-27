class CompaniesController < ApplicationController
  def new
    @company = Company.new
  end

  def create
    Company.create company_params
    # pass in the company params, and create
    redirect_to companies_path
  end

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find params[:id]
  end

  def edit
    @company = Company.find params[:id]
  end

  def update
    work = Company.find params[:id]
    work.update! company_params
    redirect_to company_path(params[:id])
  end

  def destroy
    Company.find(params[:id]).destroy    

    redirect_to companies_path
  end

  private def company_params 
    params.require(:company).permit(:name, :industry, :revenue)
  end
end
