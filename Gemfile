source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "bootstrap-sass"
gem "bootstrap-will_paginate"
gem "coffee-rails", "~> 4.2"
gem "config"
gem "devise"
gem "faker"
gem "carrierwave", "1.1.0"
gem "mini_magick", "4.7.0"
gem "fog", "1.40.0"
gem "font-awesome-rails", "4.7.0.2"
gem "i18n-js", "3.0.0"
gem "jbuilder", "~> 2.5"
gem "jquery-rails", "4.3.1"
gem "puma", "~> 3.7"
gem "rails", "~> 5.1.2"
gem "rspec-html-matchers"
gem "sass-rails", "~> 5.0"
gem "toastr-rails", "1.0.3"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "will_paginate"
gem "cancancan"
gem "omniauth-facebook"
gem "omniauth-google-oauth2"
gem "activerecord-session_store"
gem "social-share-button"

group :development, :test do
  gem "autoprefixer-rails"
  gem "better_errors"
  gem "brakeman", require: false
  gem "bundler-audit"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "database_cleaner"
  gem "eslint-rails"
  gem "factory_girl_rails"
  gem "guard-rspec", require: false
  gem "jshint"
  gem "railroady"
  gem "rails_best_practices"
  gem "reek"
  gem "rspec"
  gem "rspec-collection_matchers"
  gem "rspec-rails"
  gem "rubocop", "~> 0.35.0", require: false
  gem "rubocop-checkstyle_formatter", require: false
  gem "scss_lint", require: false
  gem "scss_lint_reporter_checkstyle", require: false
  gem "selenium-webdriver"
  gem "sqlite3"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end
group :production do
  gem "pg"
end
group :test do
  gem "simplecov", require: false
  gem "simplecov-rcov", require: false
  gem "simplecov-json"
  gem "shoulda-matchers"
end


gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
