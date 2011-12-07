class UsersController < ApplicationController
  def new
    @user = User.new
    @title = "Sign up"
  end
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      flash[:success] = "Profile updated."
      redirect_to @user
    else
      @title = "Edit user"
      render 'edit'
    end
  end
  def edit
    @user = User.find(params[:id])
    @title = "Edit user"
  end
	def show
    @user = User.find(params[:id])
	@title = @user.name
  end
  def create
    @user = User.new(params[:user])
    if @user.save
	sign_in @user
	flash[:success] = "You have succesfully signed up"
      redirect_to user_path(@user)
    else
      @title = "Sign up"
      render 'new'
    end
  end
end
