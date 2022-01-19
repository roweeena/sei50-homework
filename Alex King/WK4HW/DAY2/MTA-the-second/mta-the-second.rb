require 'colorize'

$close_planner = "no"

puts "WELCOME TO HELL!!!!!1".red, ""
until $close_planner == "N"
    lines = {
        "N" => %w{Time_Square 34th 28th 23rd Union_Square},
        "L" => %w{8th 6th Union_Square 3rd 1st},
        "6" => %w{Grand_Central 33rd 28th 23rd Union_Square Astor_Place}
    }
    puts ""
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
    
    # puts where_first, union_square_first, where_second, union_square_second 
    
    $stations = []
    
    def single_line(first, second, line)
        if first >= second
            $stations << line[second..first].reverse!
        else 
            $stations << line[first..second]
        end
        $stations = $stations.flatten!
    end
    
    if line_first == line_second
        single_line(where_first, where_second, line_first)
    else 
        $stations = single_line(union_square_first, where_first, line_first).reverse | single_line(union_square_second, where_second, line_second)
        puts "","Change over at Union Square required (stop #{$stations.index("Union_Square")} of your trip)".red
    end 

    # $stations is made up of 2 arrays because there's 2 separate 
    trip_length = $stations.length
    $stations.pop

    puts "", "Your journey will be #{trip_length} stop/s long".yellow, ""

    puts "On your journey you will go from:"

    $stations.each{|el| puts "#{el} then,"}
    puts "you'll arive at your destination #{station_second}", ""

    puts "Would you like to plan another trip? [Y/N]".blue
    $close_planner = gets.chomp.upcase

end
