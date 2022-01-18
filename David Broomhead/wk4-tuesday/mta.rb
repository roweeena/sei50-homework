

# Hints:
#     Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
#     Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
#     A symbol can't just be a number!
#     Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
#     Make subway lines keys in a hash, while the values are an array of all the stops on each line.
#     The key to the lab is to find the intersection of the lines at Union Square.
#     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


# plan_trip( :n, "Times Square", :l, "1st" )

puts "--------------------"

def get_array(line,origin_station,destination_station)
    
    mta = {
        :n => [
            "Times Square",
            "34th",
            "28th N Line",
            "23rd N Line",
            "Union Square",
            "8th N Line"
        ],
        :l => [
            "8th L Line",
            "6th", 
            "Union Square", 
            "3rd",
            "1st"
        ],
        :six => [
            "Grand Central",
            "33rd",
            "28th Six Line",
            "23rd Six Line",
            "Union Square",
            "Astor Place"
        ]
    }

    origin = mta[line].index(origin_station)
    destination = mta[line].index(destination_station)

    if origin<destination
        station_array = mta[line][origin..destination]
        # p station_array
        puts "Board the train and travel through #{station_array}"
    elsif origin>destination
        station_array = mta[line][destination..origin]
        station_array = station_array.reverse
        puts "Board the train and travel through #{station_array}"
    else
        puts "stations invalid"
    end # if
end # get_array

def multi_line(first_line,origin_station,second_line,destination_station)
    get_array(first_line,origin_station,"Union Square")
    get_array(second_line,"Union Square",destination_station)
end

def trip_planner(first_line,origin_station,second_line,destination_station)

    if(first_line == second_line)
        get_array(first_line,origin_station,destination_station)
    else
        multi_line(first_line,origin_station,second_line,destination_station)
    end #if
end #trip_planner

multi_line(:six,"Astor Place",:n,"Times Square")

