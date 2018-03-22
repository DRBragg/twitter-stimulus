Rails.application.routes.draw do
  devise_for :users
  resources :tweets
  delete '/tweets/:id/remove_photo', to: 'tweets#remove_photo'

  root to: 'tweets#index'
end
