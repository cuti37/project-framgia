Devise.setup do |config|
  config.mailer_sender = "please-change-me-at-config-initializers-devise@example.com"

  require "devise/orm/active_record"

  config.case_insensitive_keys = [:email]

  config.strip_whitespace_keys = [:email]

  config.skip_session_storage = [:http_auth]

  config.stretches = Rails.env.test? ? 1 : 11

  config.reconfirmable = true

  config.expire_all_remember_me_on_sign_out = true

  config.password_length = 6..128

  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/

  config.reset_password_within = 6.hours

  config.sign_out_via = :delete

  config.scoped_views = true

  config.omniauth :facebook, "1767257596625025", "d3c08fe706ab0fbbbfde7d4c2abc3fc7",
    scope: 'email, public_profile'
  config.omniauth :google_oauth2, "634966349636-l8jpqrs8idht0baqrc1hfvvlpp5r48j7.apps.googleusercontent.com", "QODGV7YnAI1cD8_TB5z8HHbX", {}
end
