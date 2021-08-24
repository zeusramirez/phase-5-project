class FollowingsController < ApplicationController
    def index 
        follower = User.find_by(id: params[:user_id])
        followings = Following.where(user_id: follower.id)
        render json: followings
    end 

    def create 
        follower = User.find_by(id: session[:user_id])
        if follower.followings.any?{|follow| follow.vehicle_id == params[:vehicle_id]}
            render json: { response: "Already Following this vehicle" }, status: :forbidden
        else
            following = Following.create(user_id: follower.id, vehicle_id: params[:vehicle_id])
             if following.valid?
                render json: following
             else
                render json: { errors: following.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end 
    def destroy
        follow = Following.find_by(user_id: session[:user_id], vehicle_id: params[:vehicle_id])
        follow.destroy
    end
end
