class UpdatesController < ApplicationController
    def index 
        render json: Update.all
    end

    def show 
        update = Update.find_by(id: params[:id])
        if update
            render json: update
        else
            render json: { errors: update.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        update = Update.create(update_params)
        if update.valid?
            render json: update, status: :created
        else
            render json: { errors: update.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 
    def update_params
        params.permit(:vehicle_id, :title, :update_type, :difficulty, :mileage, :price, :description)
    end
end