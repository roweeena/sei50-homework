def lines
    return mta = {
        N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "Mascot", "Airport"],
        L:  ["8th", "6th", "Union Square", "3rd", "1st", "North Sydney", "Central"],
        Six:  ["Grand Central", "33rd", "28th", "23rd", "North Sydney", "Union Square", "Astor Place","Green Square", "Town Hall"]
    }
end

def where_to(line_from, stop_from, line_to, stop_to)
    if line_from != line_to
        return  multi_trip(line_from, stop_from, line_to, stop_to)
    end
    return single_trip(line_from, stop_from, stop_to)
end 

def get_lines_stops(line_from, stop_from, transfer = "Union Square")
    result = lines()
    index1 = result[line_from.to_sym].index(stop_from);
    index2 = result[line_from.to_sym].index(transfer);
    direction  = index1 < index2 ? result[line_from.to_sym][index1..index2] : result[line_from.to_sym][index2..index1].reverse;
    return direction
end

def single_trip(line_from, stop_from, stop_to)
    trip = get_lines_stops(line_from, stop_from, stop_to);
    puts "\nYour trip:\n\n#{trip.join("\n")} \n\nTotal stops: #{trip.length}\n\n"
end

def multi_trip(line_from, stop_from, line_to, stop_to)
    trip1 = get_lines_stops(line_from, stop_from);
    trip2 = get_lines_stops(line_to, stop_to).reverse;
    puts "\nFirst trip:\n\n#{trip1.join("\n")}\n\nTransfer:\n\n#{trip2.join("\n")}\n\nTotal Stops: #{trip1.length + trip2.length}" 
end

where_to("N", "Times Square","Six","Grand Central")