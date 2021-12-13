# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


HealthTip.create(text: 'Refill water')
HealthTip.create(text: 'Cut down food intake')
HealthTip.create(text: 'Take your pet to the vet for check-ups')
HealthTip.create(text: "Feel cat's ears to check normal temperature")
HealthTip.create(text: 'Take you dog for a run')

# kelly = User.create(username: 'kelly')
# francis = Pet.create(name: 'francis', age:8, weight: 15, type: 'cat', health_issues: 'none');
# kelly.pets << francis