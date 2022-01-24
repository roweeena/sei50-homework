require "colorize"

def mta_lines
  {
  n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  l: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
end

def single_line_trip line, station_on, station_off # returns an array for a single line trip

  on_index = mta_lines[line].index station_on
  off_index = mta_lines[line].index station_off 

  if on_index > off_index 
    mta_lines[line][off_index..on_index-1].reverse
  else
    mta_lines[line][on_index+1..off_index]
  end
end

def trip line_on, station_on, line_off, station_off # checks the trip type and generates the results
  puts "Here is your trip from #{line_on}-#{station_on} to #{line_off}-#{station_off}.".red
  if line_on == line_off || station_on == "Union Square" || station_off == "Union Square"

    case 
      when station_on == "Union Square" then line = line_off
      when station_off == "Union Square" then line = line_on
      else line = line_on
    end

    stops = single_line_trip line, station_on, station_off

    print "You must travel through the following stops on the"
    print " #{line} line:".green
    puts " #{stops.join ", "}.".blue
    puts "The trip is #{stops.length} stops in total.".cyan 

  else
    first_leg_stops = single_line_trip line_on, station_on, 'Union Square'
    second_leg_stops = single_line_trip line_off, 'Union Square', station_off
    
    print "You must travel through the following stops on the"
    print " #{line_on} line:".green
    puts " #{first_leg_stops.join ", "}.".blue
    puts "Change at Union Square.".yellow
    print "Your journey continues on the"
    print " #{line_off} line:".green
    puts " #{second_leg_stops.join ", "}.".blue
    puts "The trip is #{first_leg_stops.length + second_leg_stops.length} stops in total. ".cyan 
    
  end

end

def station_selector line # lets the user select a station and returns the choice
  
  puts "\nStation List".green

  mta_lines[line].each_with_index do |el, i|
    puts "#{i} = #{el}".blue
  end

  print "Select a station: "
  
  station = mta_lines[line][index = gets.to_i]

  if mta_lines[line].include? station #this check isnt foolproof because of how to_i works above.
    station
  else
    puts "\nInvalid Selection".red
    station_selector line
  end
end

def line_selector # lets the user select a line and returns the choice
  puts "Line List".green
  puts "n = N line".blue
  puts "l = L line".blue
  puts "6 = 6 line".blue
  print "Select a line: "
  line = gets[0].downcase

  case line
    when 'n' then :n
    when 'l' then :l
    when '6' then 6
    else 
      puts "\nNot a valid line".red
      line_selector
  end

end

def menu # prints the menu, returns if the user wants to plan another trip
  
  puts "\nWelcome to the MTA trip planner".red

  puts "\nWhere will you get on?".yellow
  line_on = line_selector
  station_on = station_selector line_on

  puts "\nWhere will you get off?".yellow
  line_off = line_selector
  station_off = station_selector line_off
  puts
  trip line_on, station_on, line_off, station_off
  
  print "\nWould you like to plan another trip? y/n " 
  gets[0].downcase # to end the loop
  
end

trip_planner_running = 'y'

until trip_planner_running == 'n'

  trip_planner_running = menu ## launch the program

end