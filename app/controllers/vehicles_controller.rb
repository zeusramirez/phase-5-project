class VehiclesController < ApplicationController
    def index 
        render json: Vehicle.all
    end

    def show
        vehicle = Vehicle.find_by(id: params[:id])
        if vehicle
            render json: vehicle
        else
            render json: { errors: vehicle.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def create 
        vehicle = Vehicle.create(veh_params)
        if vehicle.valid?
            render json: vehicle, status: :created
        else
            render json: { errors: vehicle.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        vehicle = Vehicle.find_by(id: params[:id])
        vehicle.destroy
        head :no_content
    end
    
    private
    
    def veh_params
        params.permit(:mileage, :year, :name, :make, :model, :category, :bio, :user_id )
    end
    
end