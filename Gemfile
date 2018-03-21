source 'https://rubygems.org/'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

gem 'rails', '~> 5.2.0.rc2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'bootstrap', '~> 4.0.0'
gem 'webpacker', '~> 3.0'
gem 'jquery-rails', '~> 4.3.1'
gem 'devise', github: 'plataformatec/devise'
gem 'devise-bootstrapped', github: 'excid3/devise-bootstrapped', branch: 'bootstrap4'


group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'capybara'
  gem 'factory_bot_rails'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda'
  gem 'valid_attribute'
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
