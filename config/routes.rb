Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#index"
  get "projects" => "home#projects"
  get "about" => "home#about"
  get "consulting" => "home#consulting"
  get "contact" => "home#contact"
  get "news" => "home#news"
  post "quiz_submissions", to: "quiz_submissions#create"

  # Proxy Storyblok CDN image requests (NuxtImg strips the domain, producing relative /f/... paths)
  get "/f/*image_path", to: redirect { |params, _req| "https://a.storyblok.com/f/#{params[:image_path]}" }, format: false

  # Silence Chrome DevTools auto-request
  get ".well-known/appspecific/com.chrome.devtools.json", to: proc { [ 204, {}, [] ] }
end
