class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :name
      t.string :photoone
      t.string :phototwo
      t.references :user, index: true

      t.timestamps
    end
  end
end
