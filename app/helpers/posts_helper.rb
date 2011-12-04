module PostsHelper
  def join_tags(post)
    post.tags.map { |t| t.name }.join(", ")
  end
  def title                                           
    base_title = "Twitter Light"  
    if @title.nil?                                   
      base_title                                      
    else
      "#{base_title} | #{@title}"                     
    end
  end
end