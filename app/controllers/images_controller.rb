class ImagesController < ApplicationController
    def create
        image = Image.create(img_params)
        if image.valid?
            render json: image, status: :created
        else
            render json: { errors: image.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def img_params 
        params.permit(:url, :vehicle_id)
    end
end
