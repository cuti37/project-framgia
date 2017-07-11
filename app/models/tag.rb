class Tag < ApplicationRecord
  has_many :post_tags
  has_many :posts, through: :post_tags
  validates :name, presence: true, length: {maximum: Settings.posts.tag.max_length}

  def count_post
    self.posts.count
  end
end
