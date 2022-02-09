require 'colorize'
def plan_trip line1, stop1, line2, stop2
    lines = { :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], :l => ['8th', '6th', 'Union Square', '3rd', '1st'], :six => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], }
    index_of_one = lines[line1].index stop1
    index_of_two = lines[line2].index stop2
    index_of_Union_one = lines[line1].index 'Union Square'
    index_of_Union_two = lines[line2].index 'Union Square'
    if index_of_one > index_of_Union_one then lines[line1].reverse! end 
    if index_of_two < index_of_Union_two then lines[line2].reverse! end
    if line1 == line2 then puts "You have a simple journey. Get on the #{line1} line and your stops are: ".green p lines[line1][index_of_one, index_of_two]
    else    puts "You have a 2-line journey. Get on the #{line1} line and your stops are: ".green
            p lines[line1][lines[line1].index(stop1), lines[line1].index('Union Square')+1]
            puts "Then get on the #{line2} line and your stops are:".green
            p lines[line2][lines[line2].index('Union Square'), lines[line2].index(stop2)] end end

# plan_trip :six, 'Astor Place', :l, '8th'
plan_trip :n, 'Times Square', :six, '33rd'