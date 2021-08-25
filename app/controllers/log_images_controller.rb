class LogImagesController < ApplicationController

    def create
        image = LogImage.create(url: params[:url], log_id: params[:log_id])
        if image
            render json: image, status: :created
        else
            render json: { errors: image.errors.full_messages }, status: :unprocessable_entity
        end
    end
    private

    def img_params
        params.permit(:url, :log_id)
    end
end
