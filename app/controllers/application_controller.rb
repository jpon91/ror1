class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper
  def welcome
    @title = ""
  end
  def comments
    @title = "Comments"
  end
  def posts
    @title = "posts"
  end
  
end
