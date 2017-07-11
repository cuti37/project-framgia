class CommentsController < ApplicationController
  before_action :comment_params, only: [:new, :create, :update]
  before_action :find_post
  before_action :find_comment, only: [:edit, :update, :create, :destroy]
  def create
    @comment = @post.comments.build comment_params
    @comment.user_id = current_user.id

    if @comment.save
      render json: {status: :success, res: render_to_string(partial: "comments/comment",
        locals: {comment: @comment}, layout: false)}
    else
      render json: {status: :error, messsages: @comment.errors.full_messages}
    end
  end

  def destroy
    if @comment.destroy
      respond_to do |format|
          format.html {redirect_to @post}
          format.js
      end
    else
      respond_to do |format|
        format.html {redirect_to @post}
        format.js {render "error", :locals => {:status => "error_destroy"}}
      end
    end
  end

  def edit
    render json: {status: :success, html: render_to_string(partial: "comments/comment_form", locals: {comment: @comment}, layout: false)}
  end

  def update
    if @comment.update_attributes comment_params
      render json: {status: :success, res: render_to_string(partial: "comments/comment",
        locals: {comment: @comment}, layout: false)}
    else
      render json: {status: :error, messsages: @comment.errors.full_messages}
    end
  end

  def destroy
    @comment.destroy
    render json: {status: :success}
  end

  private

  def comment_params
    params.require(:comment).permit :content
  end

  def find_post
    @post = Post.find params[:post_id]
    redirect_to root_url if @post.nil?
  end

  def find_comment
    @comment = @post.comments.find_by id: params[:id]
  end
end
