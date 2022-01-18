# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

require 'colorize'

def trip_calc
    print('Distance in KMs: ')
    distance = gets.chomp
    distance = distance.to_f
    print('Kilometres per gallon: ')
    kms_per_g = gets.chomp
    kms_per_g = kms_per_g.to_f
    print('Price per gallon: ')
    price_per_g = gets.chomp
    price_per_g = price_per_g.to_f
    print('Speed in km per hour: ')
    speed_in_kmh = gets.chomp
    speed_in_kmh = speed_in_kmh.to_f

    trip_time = "It will take #{distance / speed_in_kmh} hours.".green
    puts trip_time

    trip_gallons = distance / kms_per_g
    trip_cost = "It will cost $#{trip_gallons * price_per_g} in fuel.".blue
    puts trip_cost
end

trip_calc