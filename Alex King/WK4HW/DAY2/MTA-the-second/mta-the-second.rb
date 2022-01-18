require 'pry'
require 'colorize'
$close_planner = "no"
until $close_planner == "N"
lines = {
    "N" => %w{Time_Square 34th 28th 23rd_N Union_Square},
    "L" => %w{8th 6th Union_Square 3rd 1st},
    "6" => %w{Grand_Central 33rd 28th 23rd_6 Union_Square Astor_Place}
}
puts "WELCOME TO HELL!!!!!1".red, ""
puts "(N) Line N:".green, lines["N"], ""
puts "(L) Line L: ".magenta, lines["L"], ""
puts "(6) Line 6:".blue, lines["6"], ""


print "Which line will you be departing from? "
line_first = lines[gets.chomp.upcase] #Enter value... don't enter "" since it's a string, you don't have to tell it that... 

print "What stop are you getting on? "
station_first = gets.chomp

print "Which line will you get off? "
line_second = lines[gets.chomp.upcase]

print "What is your desired destination? "
station_second = gets.chomp

# Find index of the stations and lines 
# Store index of Union_Square 

where_first = line_first.index station_first
union_square_first = line_first.index "Union_Square"

where_second = line_second.index station_second
union_square_second = (line_second.index "Union_Square") 
# union_square_second = union_square_second + 1

#works
# puts where_first, union_square_first, where_second, union_square_second 

stations = []
# stations = stations.uniq

# First line
if union_square_first >= where_first #if before
    stations << line_first[where_first..union_square_first]
else #if after 
    stations << line_first[union_square_first..where_first].reverse!
end # Closing first line

# Second line
if union_square_second >= where_second #if before
    stations << line_second[where_second..union_square_second].reverse!
else #if after 
    stations << line_second[union_square_second..where_second]
end # Closing second line

# stations is made up of 2 arrays because there's 2 separate 
stations = stations.flatten!.uniq!

trip_length = stations.length
puts "Change over at Union Square require (stop #{stations.index("Union_Square")} of your trip)".red
puts "Your journey will be #{trip_length} stop/s long".yellow
puts ""
# you'll travel to ... then ..., then you'll arrive at when stations[-1]
# to cut the last stop, you do stations[0,-2]
puts "Would you like to plan another trip? [Y/N]".green
$close_planner = gets.chomp
puts $close_planner

end

# binding.pry
