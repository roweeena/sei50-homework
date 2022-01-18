require 'colorize'

def plan_trip line1, stop1, line2, stop2

    # The hash of lines
    lines = { :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], :l => ['8th', '6th', 'Union Square', '3rd', '1st'], :six => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], }

    # Gets the index of stop 1 and stop 2
    index_of_one = lines[line1].index stop1
    index_of_two = lines[line2].index stop2

    # Gets the index of Union Square on Line 1 and Line 2
    index_of_Union_one = lines[line1].index 'Union Square'
    index_of_Union_two = lines[line2].index 'Union Square'

    # If stop 1 declared is after Union Square (we need to know this as it is the only intersecting stop)
    if index_of_one > index_of_Union_one then lines[line1].reverse! end

    # If stop 2 declared is before Union Square
    if index_of_two < index_of_Union_two then lines[line2].reverse! end

    # This is the actual function that understands if it is a single line trip or a multi-line trip
    if line1 == line2 

        # If it is a single line trip, just outline array between stop 1 and stop 2
        then puts "You have a simple journey. Get on the #{line1} line and your stops are: ".green p lines[line1][index_of_one, index_of_two]

        # If it is a multi-line trip then go from Stop 1 to Union Square then go to line 2 and go from Union Square to Stop 2
        else    puts "You have a 2-line journey. Get on the #{line1} line and your stops are: ".green
                p lines[line1][lines[line1].index(stop1), lines[line1].index('Union Square')+1]
                puts "Then get on the #{line2} line and your stops are:".green
                p lines[line2][lines[line2].index('Union Square'), lines[line2].index(stop2)] 
    end 
end

# plan_trip :six, 'Astor Place', :l, '8th'
# plan_trip :n, 'Times Square', :six, '33rd'

def get_input

    puts "Train Schedule:"
    puts "N: Times Square -- 34th -- 28th -- 23rd -- Union Square -- 8th"
    puts "L: 8th -- 6th -- Union Square -- 3rd -- 1st"
    puts "6: Grand Central -- 33rd -- 28th -- 23rd -- Union Square -- Astor Place"

    puts "Where would you like to begin your journey?"
    puts "For:
    n - N Line
    l - L Line
    six - 6 Line"

    line_1_select = gets.chomp.to_sym
    p line_1_select

    puts "Thank you. And where would you like to start your journey?"
    p "Please write out the name of your stop: "
    p stop_1_select = gets.chomp

    puts "Great! And where would you like to end your journey?"
    puts "For:
    n - N Line
    l - L Line
    six - 6 Line"

    line_2_select = gets.chomp.to_sym
    p line_2_select

    puts "Thank you. And whcih stop is at the end of your journey?"
    p "Please write out the name of your stop: "
    p stop_2_select = gets.chomp

    plan_trip line_1_select, stop_1_select, line_2_select, stop_2_select

end

get_input