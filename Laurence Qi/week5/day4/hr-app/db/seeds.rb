Company.destroy_all


apple = Company.create(
    name: 'Apple',
    industry: 'tech',
    revenue: 365_817
)

amazon = Company.create(
    name: 'Amazon',
    industry: 'e-commerce',
    revenue: 2_054_403
)

tesla = Company.create(
    name: 'Tesla',
    industry: 'car manufacturer',
    revenue: 53_800
)

puts "Sucess! Created #{Company.count} Companies"
puts Company.pluck(:name).join(', ')


Employee.destroy_all

Employee.create(
    name: 'Laurence Qi', 
    role: 'junior developer',
    salary: 80_000,
    company_id: tesla.id
)

Employee.create(
    name: 'Daniel Lord-Doyle',
    role: 'senior developer',
    salary: 100_000,
    company_id: tesla.id
)

Employee.create(
    name: 'Jesus Flores',
    role: 'CTO',
    salary: 500_000,
    company_id: amazon.id
    
)

Employee.create(
    name: 'Cameron Reid',
    role: 'junior developer',
    salary: 75_000,
    company_id: amazon.id
)

Employee.create(
    name: 'ethan zheng',
    role: 'devops engineer',
    salary: 80_000,
    company_id: apple.id
)

puts "Sucess! Created #{Employee.count} Employees"
puts Employee.pluck(:name).join(', ')
