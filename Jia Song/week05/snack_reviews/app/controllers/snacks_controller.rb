class SnacksController < ApplicationController
  # [READ]
  def index
    @snacks = Snack.all
  end

  def show
    @snack = Snack.find params[:id]
  end

  # [CREATE]
  def create_form
    @snack = Snack.new
  end

  def create
    Snack.create(
      name: params[:snack][:name],
      review: params[:snack][:review],
      rate: params[:snack][:rate],
      image_url: params[:snack][:image_url],
    )
    redirect_to snacks_path
  end

  # [UPDATE]
  def update_form
    @snack = Snack.find params[:id]
  end

  def update
    snack = Snack.find params[:id]
    snack.update(
      name: params[:snack][:name],
      review: params[:snack][:review],
      rate: params[:snack][:rate],
      image_url: params[:snack][:image_url],
    )
    redirect_to snack_path(params[:id])
  end

  # [DELETE]
  def destroy
    Snack.destroy params[:id]
    redirect_to snacks_path
  end
end