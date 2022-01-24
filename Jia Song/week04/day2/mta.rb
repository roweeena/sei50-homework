require 'colorize'
require 'pry'


$train_lines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
$transfer_station = "Union Square"

def get_stations_arr(line, start_station, end_station)
  current_line = $train_lines[line]

  # find the indices
  start_index = current_line.find_index start_station
  end_index = current_line.find_index end_station

  # return a sliced array
  if start_index < end_index
    # going forwards
    # it need to exculde the start station, and include the end station
    current_line[start_index+1 .. end_index]
  else
    # going backwards
    current_line[end_index ... start_index].reverse
  end
end


def take_single_trip(line, start_station, end_station)
  all_stations = get_stations_arr(line, start_station, end_station)

  puts "
    You need to pass #{all_stations.join(', ')} on line #{line}.
    The total number of stops for the trip is #{all_stations.length}.
    ".blue
end


def take_multi_trip(start_line, start_station, end_line, end_station)
  stations_before = get_stations_arr(start_line, start_station, $transfer_station)
  stations_after = get_stations_arr(end_line, $transfer_station, end_station)
  total_stations = stations_before.length + stations_after.length

  puts "
    You need to pass #{stations_before.join(', ')} on line #{start_line}.
    Transfer at #{$transfer_station} to line #{end_line}.
    You need to pass #{stations_after.join(', ')} on line #{end_line}.
    The total number of stops for the trip is #{total_stations}.
    ".blue
end


def check_input(line, station)
  # if there is no 'line', return false
  if !$train_lines.key? line
    puts "ERROR: Wrong line '#{line}'".red
    # return it so it won't run next if statement
    return false
  end
  
  # if there is no 'station' in 'line', return false
  if !$train_lines[line].include? station
    puts "ERROR: Wrong station '#{station}'".red
    false
  end
end


def plan_trip(start_line, start_station, end_line, end_station)
  # binding.pry

  # validate the inputs first
  if !check_input(start_line, start_station) || !check_input(end_line, end_station)
    return
  end

  # get a result depends on trip type
  if start_line == end_line
    take_single_trip(start_line, start_station, end_station)
  else
    take_multi_trip(start_line, start_station, end_line, end_station)
  end
end


def get_inputs()
  puts ("Train map -------------------------------------
    line N: #{$train_lines[:N].join(', ')}
    line L: #{$train_lines[:L].join(', ')}
    line 6: #{$train_lines[:"6"].join(', ')}
    ----------------------------------------------------
    ").green

  print("what's your starting train line? (N, L, 6) ")
  start_line = gets.chomp.to_sym

  print("What's your start station? ")
  start_station = gets.chomp

  print("What's your destination train line? (N, L, 6) ")
  end_line = gets.chomp.to_sym

  print("What's your destination station? ")
  end_station = gets.chomp

  puts ("
    Trip from #{start_station} in line #{start_line} to #{end_station} in line #{end_line} -------------------
  ").yellow

  plan_trip(start_line, start_station, end_line, end_station)
end


finish_trip = "n"
# finish_trip = "y"

until finish_trip == "y"
  user_inputs = get_inputs()

  print("Do you want to finish? (y/n) ")
  finish_trip = gets.chomp
end


# plan_trip( :N, "Times Square", :N, "23rd" )
# plan_trip( :N, "23rd", :N, "Times Square" )
# plan_trip( :L,  "1st", :N, "Times Square" )
# plan_trip( :"6",  "Grand Central", :N, "Times Square" )
# plan_trip( "wrong line", "1st", :N, "wrong station" )