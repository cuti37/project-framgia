class Admin::UsersController < ApplicationController
  layout "admin"
  before_action :find_user, only: :destroy

  def index
    @users = User.paginate page: params[:page], per_page: Settings.posts.max_post
  end

  def destroy
    @user.destroy
    render json: {status: :success}
  end

  private

  def find_user
    @user = User.find_by id: params[:id]
    return admin_root_path if @user.nil?
  end
end
