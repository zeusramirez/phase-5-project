class LogImagesController < ApplicationController

    def create
        image = LogImage.create(img_params)
        if image.valid?
            render json: image, status: :created
        else
            render json: { errors: image.errors.full_messages }, status: :unprocessable_entity
        end
    end
    private

    def img_params
        params.permit(:url, :update_id)
    end
end
