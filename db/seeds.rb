# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do 
    User.create(
        name: Faker::Name.name,
        username: Faker::Superhero.descriptor,
        password: "1111"
    )
end
10.times do 
    Vehicle.create(
        year: Faker::Vehicle.year,
        name: Faker::Games::Pokemon.name,
       mileage: Faker::Vehicle.mileage(max: 300_000),
       make: Faker::Vehicle.make,
       model: Faker::Vehicle.model,
       category: Faker::Vehicle.car_type,
       bio: Faker::Lorem.sentence,
       user_id: User.all.ids.sample
    )
end
mod_type= ["modification", "repair", "maintenance"]
20.times do
    Update.create(
       vehicle_id: Vehicle.all.ids.sample,
       title:  Faker::Vehicle.car_options,
       mileage: Faker::Vehicle.mileage(max: 300_000),
       difficulty: rand(10),
       price: rand(5..10000),
       description: Faker::Lorem.sentence,
       update_type: mod_type.sample
    )
end

5.times do
    Following.create(
        vehicle_id: Vehicle.all.ids.sample,
        user_id: User.all.ids.sample
    )
end
puts "Seed Successful!"