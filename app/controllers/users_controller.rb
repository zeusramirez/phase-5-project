class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index 
        render json: User.all
    end 

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else 
            render json: {error: "Unauthorized access"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        user.update(user_params)
        if user.valid?
            render json: user, status: :accepted
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def vehlist
        user = User.find_by(id: session[:user_id])
        vehs = []
        if user
            user.vehicles.each do |vehicle|
                vehs << vehicle     
            end
            render json: vehs       
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private

    def user_params
        params.permit(:username, :name, :password)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end

end
