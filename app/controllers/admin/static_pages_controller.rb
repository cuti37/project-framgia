class Admin::StaticPagesController < ApplicationController
  layout "admin"
  def home
    if user_signed_in? && current_user.is_admin?
      @total_posts = Post.count
      @total_users = User.count
      @total_comments = Comment.count
    else
      redirect_to root_path
    end
  end
end
