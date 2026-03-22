class QuizSubmissionsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    submission = QuizSubmission.new(
      name:               params[:name],
      phone:              params[:phone],
      email:              params[:email],
      source:             params[:from],
      language:           params[:sitelang],
      purpose:            params[:purpose],
      acquisition_period: params[:acquisition_period],
      budget:             params[:budget]
    )

    if submission.save
      render json: { ok: true }, status: :created
    else
      render json: { ok: false, errors: submission.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
