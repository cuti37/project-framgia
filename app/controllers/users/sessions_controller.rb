class Users::SessionsController < Devise::SessionsController
  def new
    super
  end

  def create
    user = User.find_by email: sign_in_params[:email].downcase

    if user && user.valid_password?(sign_in_params[:password])
      user = warden.authenticate!(auth_options)
      sign_in resource_name, user
      render json: {status: :success, message: t(".login_success")}
    else
      render json: {status: :error, message: t(".login_error")}
    end
  end

  def destroy
    super
  end
end
