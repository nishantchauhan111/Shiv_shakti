class QuizSubmissionsController < ApplicationController
  protect_from_forgery with: :null_session

  require "net/http"
  require "uri"

  GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdZD_ZuUwabdtQ6OYQRYS7g8qriDnKiKInUYJJmH55vhW97pfo2uvVlDSKpY2Sj2TF2w/exec"

  def create
    data = {
      name:               params[:name],
      phone:              params[:phone],
      email:              params[:email],
      source:             params[:from],
      language:           params[:sitelang],
      purpose:            params[:purpose],
      acquisition_period: params[:acquisition_period],
      budget:             params[:budget]
    }

    begin
      uri = URI.parse(GOOGLE_SCRIPT_URL)

      response = post_with_redirect(uri, data)

      Rails.logger.info "Google response body: #{response.body}"
      Rails.logger.info "Google response code: #{response.code}"

      if response.code.to_i == 200
        render json: { ok: true }, status: :created
      else
        render json: {
          ok: false,
          status: response.code,
          error: response.body
        }, status: :unprocessable_entity
      end

    rescue => e
      Rails.logger.error "Google Sheets Error: #{e.message}"

      render json: {
        ok: false,
        error: e.message
      }, status: :unprocessable_entity
    end
  end

  private

  def post_with_redirect(uri, data, limit = 3)
    raise "Too many redirects" if limit == 0

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE  # ✅ fix

    request = Net::HTTP::Post.new(uri.request_uri)
    request.set_form_data(data)

    response = http.request(request)

    case response
    when Net::HTTPRedirection
      new_uri = URI.parse(response["location"])
      post_with_redirect(new_uri, data, limit - 1)
    else
      response
    end
  end
end
