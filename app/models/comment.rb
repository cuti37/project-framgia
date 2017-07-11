class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  scope :sort_by_created_at, ->{order created_at: :desc}

  validates :user, presence: true
  validates :content, presence: true
  validates :post, presence: true
end
