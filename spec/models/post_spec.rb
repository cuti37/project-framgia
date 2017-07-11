require "rails_helper"

RSpec.describe Post, type: :model do
  context "associations" do
    it do
      is_expected.to belong_to :user
      is_expected.to have_many :comments
      is_expected.to have_many :post_tags
      is_expected.to have_many :tags
    end
  end
  context "validates" do
    it do
      is_expected.to validate_presence_of :user
      is_expected.to validate_presence_of :title
      is_expected.to validate_presence_of :content
    end
  end
end
