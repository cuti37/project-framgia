module ApplicationHelper
  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  # def custom_messages_flash
  #   flash_messages = []
  #   flash.each do |type, message|
  #     type = "success" if type == "notice"
  #     type = "error"   if type == "alert"
  #     puts type

  #     text = "<script>toastr.#{type}("#{message}");</script>"
  #     flash_messages << text.html_safe if message
  #   end
  #   flash_messages.join("\n").html_safe
  # end
end
