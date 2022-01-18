

# Hints:
#     Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
#     Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
#     A symbol can't just be a number!
#     Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
#     Make subway lines keys in a hash, while the values are an array of all the stops on each line.
#     The key to the lab is to find the intersection of the lines at Union Square.
#     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


# plan_trip( :n, "Times Square", :l, "1st" )


def get_array(origin_station,destination_station)
    
    mta = {
        name: :n,
        stops: [
            "Times Square",
            "34th",
            "28th N Line",
            "23rd N Line",
            "Union Square",
            "8th N Line"
        ]
    }

    origin = mta[:stops].index(origin_station)
    destination = mta[:stops].index(destination_station)

    if origin > destination
        station_array = mta[:stops][origin..destination]
        puts "Board the train and travel through #{station_array}"
    elsif origin < destination
        station_array = mta[:stops][destination..origin]
        station_array = station_array.reverse
        puts "Board the train and travel through #{station_array}"
    else
        puts "stations invalid"
    end # if

end # get_array

get_array("Times Square","Union Square")
get_array("Union Square","Times Square")



