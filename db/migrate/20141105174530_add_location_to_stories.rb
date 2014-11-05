class AddLocationToStories < ActiveRecord::Migration
  def change
    add_column :stories, :location, :string
  end
end
