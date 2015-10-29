Rails.application.routes.draw do
  get "big_list" => "big_list#index"
  get "loop" => "loop#index"
  get "caching" => "caching#index"
  get "tweets" => "tweets#index"
  get "async" => "async#index"
  get "many_assets" => "many_assets#index"
  get "many_assets/display/:id" => "many_assets#display"
  get "errors" => "errors#index"
  get "errors/ajax" => "errors#ajax"
  get "many_calls" => "many_calls#whos_in_space"
  get "many_calls/where_is_iss" => "many_calls#where_is_iss"

  scope :api do
    get "astronauts" => "many_calls#astronauts"
    get "overhead" => "many_calls#overhead"
    get "location" => "many_calls#location"
  end

  root :to => "home#index"
end
