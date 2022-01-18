require "colorize"
puts "Welcome to MTA!".red
def lines
  {
    line_n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    line_l: ["8th", "6th", "Union Square", "3rd", "1st"],
    line_6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
end

def single_line journeyline, start, finish
  line = lines[journeyline] # calls the lines function and captures the array of the journey_line 
  start_index = line.index(start) # gets the index in the line array of the start station
  end_index = line.index(finish) # gets the index in the line array of the end station
  if start_index < end_index # checks if start is bigger than end
    stations = line[start_index..end_index] # if so runs a range on the line array to get the stations that are passed through
    puts "You will travel through these stations on #{journeyline}: #{stations.join(", ")}".blue
  else
    stations = line[end_index..start_index].reverse # reverses if the end index is bigger <- has to be swapped to print in order
    puts "You will travel through these stations on #{journeyline}: #{stations.join(", ")}".blue #displays to the console
  end # end index if
end # end single trip

def build_trip start_line, start_station, end_line, end_station
  if start_line == end_line # if both stations are the same single line only runs once
    single_line start_line, start_station, end_station #calls single line once
  else
    single_line start_line, start_station, "Union Square" #calls first single_line trip with Union Square as the end station
    puts "Change at Union Square to #{end_line}".green # tells user to change lines
    single_line end_line, "Union Square", end_station  # calls second single_line trip with Union Square as the start station
  end # end check if same line
end # end build trip

build_trip :line_n, "8th", :line_n, "34th"
build_trip :line_6, "33rd", :line_6, "Union Square"
build_trip :line_n, "8th", :line_6, "Grand Central"