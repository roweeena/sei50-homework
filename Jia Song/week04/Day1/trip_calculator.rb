require 'colorize'

# 1. get inputs
print("distance(mile): ")
distance = gets.to_f

print("miles per gallon: ")
miles_per_gallon = gets.to_f

print("price per gallon: ")
price_per_gallon = gets.to_f

print("speed in miles per hour: ")
speed_in_miles = gets.to_f


# 2. return outputs
time = distance / speed_in_miles
puts "Estimate trip time: #{time}hrs".red

cost = distance / miles_per_gallon * price_per_gallon
puts "Estimate cost: $#{cost}".red