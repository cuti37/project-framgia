class Admin::PostsController < ApplicationController
  layout "admin"
  before_action :find_post, only: :destroy

  def index
    @posts = Post.paginate page: params[:page], per_page: Settings.posts.max_post
  end

  def destroy
    @post.destroy
    render json: {status: :success}
  end

  private

  def find_post
    @post = Post.find_by id: params[:id]
    return admin_root_path if @post.nil?
  end
end
