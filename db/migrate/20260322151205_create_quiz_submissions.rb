class CreateQuizSubmissions < ActiveRecord::Migration[8.1]
  def change
    create_table :quiz_submissions do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :source
      t.string :language

      t.timestamps
    end
  end
end
