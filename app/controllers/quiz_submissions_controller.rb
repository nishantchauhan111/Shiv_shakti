class QuizSubmissionsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    data = {
      name:               params[:name],
      phone:              params[:phone],
      email:              params[:email],
      source:             params[:from],
      language:           params[:sitelang],
      purpose:            params[:purpose],
      acquisition_period: params[:acquisition_period],
      budget:             params[:budget],
      created_at:         Time.current
    }

    file_path = Rails.root.join("storage/quiz_submissions.json")

    begin
      File.open(file_path, "a") do |f|
        f.flock(File::LOCK_EX) # prevent concurrent write issues
        f.puts(data.to_json)
        f.flock(File::LOCK_UN)
      end

      render json: { ok: true }, status: :created

    rescue => e
      render json: { ok: false, error: e.message }, status: :unprocessable_entity
    end
  end
end

# class QuizSubmissionsController < ApplicationController
#   protect_from_forgery with: :null_session

#   def create
#     submission = QuizSubmission.new(
#       name:               params[:name],
#       phone:              params[:phone],
#       email:              params[:email],
#       source:             params[:from],
#       language:           params[:sitelang],
#       purpose:            params[:purpose],
#       acquisition_period: params[:acquisition_period],
#       budget:             params[:budget]
#     )

#     if submission.save
#       render json: { ok: true }, status: :created
#     else
#       render json: { ok: false, errors: submission.errors.full_messages }, status: :unprocessable_entity
#     end
#   end
# end
