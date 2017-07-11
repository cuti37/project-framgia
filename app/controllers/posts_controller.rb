class PostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :post_load, except: [:new, :create, :index]
  def index
    if params[:search]
      @posts = Post.search(params[:search]).sort_by_created_at.order("created_at DESC").paginate page: params[:page], per_page: Settings.posts.max_post
    else
      @posts = Post.all.sort_by_created_at.order("created_at DESC").paginate page: params[:page], per_page: Settings.posts.max_post
    end
  end

  def show

  end

  def create
    @post = current_user.posts.build post_params

    if @post.save
      tags = params[:tags]
      tags.split(",").each do |tag_name|
        tag = Tag.find_by name: tag_name

        if tag.nil?
          @post.tags.create name: tag_name
        else
          @post.post_tags.create tag_id: tag.id
        end
      end
      render json: {status: :success, res: render_to_string(partial: "posts/post",
        locals: {post: @post, post_id: @post.id}, layout: false)}
    else
      render json: {status: :error, res: @post.errors.full_messages}
    end
  end

  def edit
    render json: {status: :success, html: render_to_string(partial: "posts/post_form",
      locals: {post: @post}, layout: false)}
  end

  def update
    if @post.update_attributes post_params
      tags = params[:tags]
      tags.split(",").each do |tag_name|
      tag = Tag.find_by name: tag_name

      if tag.nil?
        @post.tags.create name: tag_name
      else
        @post.post_tags.create tag_id: tag.id
      end
    end
      render json: {status: :success, res: render_to_string(partial: "posts/post",
        locals: {post: @post}, layout: false), post_id: @post.id}
    else
      render json: {status: :error, res: @post.errors.full_messages}
    end
  end

  def destroy
    @post.destroy
    render json: {status: :success}
  end

  private

  def post_params
    params.require(:post).permit :title, :content, :picture, :tags
  end

  def correct_user
    @post = current_user.posts.find_by(id: params[:id])
    redirect_to root_url if @post.nil?
  end

  def post_load
    @post = Post.find_by_id params[:id]
    render file: "public/404.html", status: 404 if @post.nil?
  end
end
