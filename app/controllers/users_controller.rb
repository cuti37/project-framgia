class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :following, :followers]
  def show
    @user = User.find(params[:id])
    if user_signed_in?
      @post = current_user.posts.build
      @posts = @user.posts.paginate page: params[:page], per_page: Settings.posts.max_post
      @following = @user.following.all
      @followers = @user.followers.all
    else
      @posts = Post.sort_by_created_at.paginate page: params[:page], per_page: Settings.posts.max_post
      @following = @user.following.all
      @followers = @user.followers.all
    end
  end

  def index
    @users = User.paginate page: params[:page], per_page: Settings.posts.max_post
  end

  private

  def logged_in_user

  end
end
