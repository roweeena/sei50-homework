# # MTA Lab

# ### Activity:
# - Students should create a program that models a simple subway system.

# - The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints:
#   + the stations the user must pass through, in order
#   + where to change lines, if necessary
#   + the total number of stops for the trip.
  
# - There are 3 subway lines:
#   - The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   - All 3 subway lines intersect at Union Square, but there are no other intersection points.
#     - For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.

# We should be able to say:

# ```ruby
# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
# ```

# ### Hints:
# * Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# * Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables 
# * A symbol can't just be a number!
# * Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# * Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# * The key to the lab is to find the __intersection__ of the lines at Union Square.
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

# plan_trip( :n, "Times Square", :l, "1st" )

def single_trip(start_line, start_stop, end_stop)
    subway = {
        :N => ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
        :L => ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
    sub_line = subway[start_line]
    start_index = sub_line.index(start_stop)
    end_index = sub_line.index(end_stop)
    # num_of_stops = (start_index - end_index).abs
    
    # p sub_line
    # p start_index
    # p end_index

    if start_index<end_index
        station_pass = sub_line.slice(start_index..end_index)
        # p station_pass
    
    else
        station_pass = sub_line.slice(end_index..start_index).reverse
        # p station_pass
    
    end


end

# single_trip(:N, "34th", "8th")
# single_trip(:N, "8th", "34th")

def plan_trip(start_line, start_stop, end_line, end_stop)

    if (start_stop == "Union Square" && end_stop == "Union Square")
        puts "You're already there idiot"
        
    elsif start_line == end_line
        trip_total = single_trip(start_line, start_stop, end_stop)

        p ("You must start on the #{start_line} line and travel through #{trip_total.join(', ')} for a total of #{trip_total.length} stops")

        #elsif start_stop || end_stop == Union Square for better outpit
    else        
        trip_one = single_trip(start_line, start_stop, "Union Square")

        trip_two = single_trip(end_line, "Union Square", end_stop)
        #why can't i just shift trip_two
        trip_two.shift

        trip_total = [trip_one, trip_two].flatten
        # num_of_stops = trip_total.length

        p ("You must start on the #{start_line} line and travel through #{trip_one.join(', ')} and change at Union Square and then go to the #{end_line} line and travel through #{trip_two.join(', ')} for a total of #{trip_total.length} stops")

    end
end

plan_trip("6", "Union Square", "6", "23rd")

# plan_trip(:N, "Times Square", :L, "Union Square")
#how to colorize