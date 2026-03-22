class AddQuizAnswersToQuizSubmissions < ActiveRecord::Migration[8.1]
  def change
    add_column :quiz_submissions, :purpose, :string
    add_column :quiz_submissions, :acquisition_period, :string
    add_column :quiz_submissions, :budget, :string
  end
end
