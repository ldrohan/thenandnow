class Story < ActiveRecord::Base
  belongs_to :user
  validates :name,:photoone,:phototwo,:user_id, presence: true
end
