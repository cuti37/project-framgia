class TagsController < ApplicationController
  before_action :load_tag, only: :show

  def index
    @tags = Tag.all
  end

  def show
    @posts = @tag.posts.paginate page: params[:page], per_page: Settings.posts.max_post
    @tag
  end

  private

  def load_tag
    @tag = Tag.find_by_id params[:id]
    render json: {status: :error} if @tag.nil?
  end
end
