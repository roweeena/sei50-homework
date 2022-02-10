class EmployeesController < ApplicationController
  def new
    @employee = Employee.create
  end

  def create
    Employee.create employee_params
  end

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find params[:id]
  end

  def edit
    @employee = Employee.find params[:id]
  end

  def update
    employee = Employee.find params[:id]
    employee.update! employee_params
  end

  def destroy

  end

  private def employee_params

    
  end
end
