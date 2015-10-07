require "faraday"

class ManyCallsController < ApplicationController
  def where_is_iss
    render :where_is_iss
  end

  def whos_in_space
    render :whos_in_space
  end

  def astronauts
    astronauts = connection.get("/astros.json").body
    render json: astronauts
  end

  def location
    iss_location = connection.get("/iss-now.json").body
    render json: iss_location
  end

  def overhead
    overhead_path = "/iss-pass.json?lat=#{latitude}&lon=#{longitude}&alt=20&n=5"
    iss_overhead_passes = connection.get(overhead_path).body
    render json: iss_overhead_passes
  end

  private

  def connection
    Faraday.new(:url => "http://api.open-notify.org") do |faraday|
      faraday.request  :url_encoded             # form-encode POST params
      faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
    end
  end

  def latitude
    params["latitude"]
  end

  def longitude
    params["longitude"]
  end
end
