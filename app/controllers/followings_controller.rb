class FollowingsController < ApplicationController
    def index 
        follower = User.find_by(id: params[:user_id])
        followings = Following.where(user_id: follower.id)
        render json: followings
    end 

    def create 
        follower = User.find_by(id: params[:user_id])
        following = Following.create(user_id: follower.id, vehicle_id: params[:vehicle_id])
        if following.valid?
    end 
end
