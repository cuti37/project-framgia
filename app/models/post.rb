class Post < ApplicationRecord
  belongs_to :user
  has_many :post_tags
  has_many :tags, dependent: :destroy ,through: :post_tags
  has_many :comments, dependent: :destroy

  scope :sort_by_created_at, ->{order created_at: :desc}
  scope :feed_load, lambda{|x,y|
    where("user_id IN (?) OR user_id = ?", x, y)}
  mount_uploader :picture, PictureUploader

  validates :user, presence: true
  validates :title, presence: true, length: {maximum: Settings.posts.title.length_title}
  validates :content, presence: true

  def self.search(search)
    where("title LIKE ? OR content LIKE ?", "%#{search}%", "%#{search}%")
  end
end
