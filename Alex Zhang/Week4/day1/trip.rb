puts "This calculator will calculate your trip time and trip cost"
puts "Please entre the distance in miles"
distance=gets.to_f
puts "Please entre the miles per gallon"
miles_per_gallon=gets.to_f
puts "Please entre the price per gallon in dollars"
price_per_gallon=gets.to_f
puts "Please entre the speed in miles per hour"
speed=gets.to_f
time=(distance/speed).floor(1)
cost=(distance/miles_per_gallon*price_per_gallon).floor(1)
puts "The time of your trip is #{time} hours"
puts "The cost of your trip is $#{cost}"
