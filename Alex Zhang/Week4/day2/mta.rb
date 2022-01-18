require "colorize"
$subway = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "SIX" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
$subway_lines = ["N", "L", "SIX"]

def no_change(start_line, start_station, stop_station) #no_change function
  subway_line = $subway[start_line]
  start_index = subway_line.index(start_station)
  stop_index = subway_line.index(stop_station)
  if start_index < stop_index
    travel_stations = subway_line[start_index + 1..stop_index]
  else
    travel_stations = subway_line[stop_index..start_index - 1]
    travel_stations.reverse! #needs to use ! mark, otherwise the orginal array wont change
  end
  return travel_stations #return the travel stations here
end

def wrong_line_and_stations(start_line, start_station, stop_line, stop_station) #check correct input
  if $subway_lines.include?(start_line) == false
    return false
  end
  if $subway_lines.include?(stop_line) == false
    return false
  end
  if $subway[start_line].include?(start_station) == false
    return false
  end
  if $subway[stop_line].include?(stop_station) == false
    return false
  end
end
# plan_trip()
def plan_trip(start_line, start_station, stop_line, stop_station)
  if wrong_line_and_stations(start_line, start_station, stop_line, stop_station) == false
    puts "You entered wrong line/station".red #check if station or lines are wrong
  elsif start_line != stop_line #needs to change lines
    # use no_change function to create two lines, start line & stop lines
    #start line always ends with Union Sq, stop line always start with Union Sq. 
    new_start_line = no_change(start_line, start_station, "Union Square") 
    new_stop_line = no_change(stop_line, "Union Square", stop_station)
    puts "You must travel through the following stops on the #{start_line} line: #{new_start_line.join(",")}".green
    puts "Change at Union Square"
    puts "Your journey continues through the following stops: #{new_stop_line.join(",")} on the #{stop_line} line".yellow #print out msg, change array to string, change colour. 
  else #no need to change line, recall no_change function
    travel_stations = no_change(start_line, start_station, stop_station)
    puts "You must travel through the following stops: #{travel_stations.join(",")}".blue
  end
end #plan_trip


# test cases:
plan_trip("N", "Times Square", "SIX", "33rd")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("N", "Times Square", "N", "8th")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("N", "8th", "L", "8th")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("SIX", "Grand Central", "L", "Union Square")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("L", "1st", "N", "Times Square")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("SIX", "1st", "L", "Times Square")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("line3", "1st", "L", "Times Square")
puts "++++++++++++++++++++++++++++++++++++++++"
plan_trip("L", "1st", "q", "Times Square")
