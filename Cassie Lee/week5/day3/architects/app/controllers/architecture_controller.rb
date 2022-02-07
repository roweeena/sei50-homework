class ArchitectureController < ApplicationController
  def new
  end

  def create
  end

  def index
    @architectures = Architecture.all
  end

  def show
    @architecture = Architecture.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
