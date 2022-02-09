def stations
    {
        "N" => [
            'Times Square',
            '34th', 
            '28th', 
            '23rd', 
            'Union Square', 
            '8th'
        ],

        "L" => [
            '8th', 
            '6th', 
            'Union Square', 
            '3rd', 
            '1st'
        ],
        
        "6" => [
            'Grand Central', 
            '33rd', 
            '28th', 
            '23rd', 
            'Union Square', 
            'Astor Place'
        ]
    }
end

def n
    stations["N"]
end

def l
    stations["L"]
end

def six
    stations["6"]
end

def plan_trip start_line, start_station, end_line, end_station
    start_index = start_line.index start_station # index of start station
    end_index = end_line.index end_station # index of end station
    us_index_start = start_line.index 'Union Square' # index of union square on start line
    us_index_end = end_line.index 'Union Square' # index of union square on end line

    if start_line == end_line # if single line
        def message array, station
            puts "You will have #{array.length} stops on your journey."
            puts "Starting at #{station}, take the following stops: #{array.join(', ')}"
        end 
        
        if start_index < end_index # if single line going forward
            trip_arr = start_line[(start_index+1)..end_index]
            message trip_arr, start_station

        else # if single line going back
            trip_arr = start_line[end_index..(start_index-1)].reverse
            message trip_arr, start_station
        end 

    else # line will swap at union square
        def swap_message array, station
            puts "You will have #{array.length} stops on your journey."
            puts "Starting at #{station} with a change at Union Square, take the following stops: #{array.join(', ')}"
        end

        if start_index < us_index_start && end_index > us_index_end # going forward on both lines   

            trip_arr = start_line[(start_index+1)..us_index_start] + end_line[(us_index_end+1)..end_index]
            swap_message trip_arr, start_station
        
        elsif start_index > us_index_start && end_index < us_index_end # going back on both lines

            trip_arr = start_line[us_index_start..start_index-1].reverse + end_line[end_index..us_index_end-1].reverse
            swap_message trip_arr, start_station
        
        elsif start_index < us_index_start && end_index < us_index_end # going forward to union square, then back

            trip_arr = start_line[(start_index+1)..us_index_start] + end_line[end_index..us_index_end-1].reverse
            swap_message trip_arr, start_station
        
        else                                                           # going back to union square, then forward
            trip_arr = start_line[us_index_start..start_index-1].reverse + end_line[(us_index_end+1)..end_index]
            swap_message trip_arr, start_station

        end
    end 
end


plan_trip six, 'Grand Central', six, 'Astor Place' # going forward on single line

plan_trip six, 'Astor Place', six, 'Grand Central' # going back on single line

plan_trip n, 'Times Square', l, '1st' # going forward with a change

plan_trip l, '1st', six, 'Grand Central' # going back with a change

plan_trip n, 'Times Square', six, 'Grand Central' # going forward and changing to back

plan_trip l, '1st', six, 'Astor Place' # going back and changing to forward