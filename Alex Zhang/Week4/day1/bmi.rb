puts "This calculator can calculate your BMI"
puts "Please entre your weight in kg"
weight=gets.to_f
puts "Please entre your height in m"
height=gets.to_f
bmi=(weight/(height**2)).floor(1)
puts "Your BMI is #{bmi}"