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

def single_line_trip(line, start_station, off_station)
     # puts "catching train at station: #{start_station}, on #{line} and getting off at station: #{off_station}."
     subway_lines= {
       :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
       :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
       :six_line =>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
       }


       
     
end








