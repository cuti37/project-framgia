User.create!(full_name:  "Admin",
             email: "admin@admin.com",
             password:              "123123",
             password_confirmation: "123123",
             is_admin: true)

99.times do |n|
  full_name  = Faker::Name.name
  email = "example-#{n+1}@railstutorial.org"
  password = "123123"
  User.create!(full_name:  full_name,
               email: email,
               password:              password,
               password_confirmation: password)
end

users = User.order(:created_at).take(6)
50.times do
  title = Faker::Lorem.sentence(5)
  content = Faker::Lorem.sentence(5)
  users.each { |user| user.posts.create!(title: title, content: content) }
end
