class TweetsController < ApplicationController

  def index
    response = HTTParty.get('https://twitter.com/Space_Station')
    response = HTTParty.get('https://twitter.com/ISS_Research')

    parsed_data = Nokogiri::HTML.parse response.body
    tweetNodes = parsed_data.css(".js-tweet-text")
    @nodes = tweetNodes.collect do |node|
      node.inner_html
    end
  end
end
