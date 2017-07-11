class RelationshipsController < ApplicationController
  def create
    @user = User.find_by id: params[:followed_id]

    if @user.nil?
      render json: {status: :error}
    else
      current_user.follow @user
      render json: {status: :success, html: render_to_string(partial: "users/unfollow", locals: {user: @user}, layout: false), followers: @user.followers.size}
    end
  end

  def destroy
    @user = User.find_by id: params[:relationship_id]

    if @user.nil?
      render json: {status: :error}
    else
      current_user.unfollow @user
      render json: {status: :success, html: render_to_string(partial: "users/follow", locals: {user: @user}, layout: false), followers: @user.followers.size}
    end
  end
end
