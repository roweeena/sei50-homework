lines = {
    :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
    :six => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

def find_index line_symbol, stop
    lines[line_symbol].each_with_index do | stop_in_array, i |
        if stop_in_array == stop
            return i
            break
        end
    end
end

def plan_single_line_trip line_symbol, first_stop, second_stop

    first_stop_index = find_index line_symbol, first_stop
    second_stop_index = find_index line_symbol, second_stop

    trip_array = $lines[line_symbol][first_stop_index..second_stop_index]
end

def plan_trip line1, line2, stop1, stop2
    
    if line1 == line2
        if (find_index line1, stop1) < (find_index line1, stop2)
            p plan_single_line_trip line1, stop1, stop2
        else
            $lines[line1].reverse!
            p plan_single_line_trip line1, stop1, stop2
        end
        
    elsif line1 != line2

        if (find_index line1, stop1) < (find_index line1, 'Union Square')
            p plan_single_line_trip line1, stop1, 'Union Square'

            if (find_index line2, 'Union Square') < (find_index line2, stop2)
                p plan_single_line_trip line2, 'Union Square', stop2
            else (find_index line2, 'Union Square') > (find_index line2, stop2)
                $lines[line2].reverse!
                p plan_single_line_trip line2, 'Union Square', stop2
            end

        else (find_index line1, stop1) > (find_index line1, 'Union Square')
                $lines[line1].reverse!
                p plan_single_line_trip line1, stop1, 'Union Square'
                if (find_index line2, 'Union Square') < (find_index line2, stop2)
                    p plan_single_line_trip line2, 'Union Square', stop2
                else (find_index line2, 'Union Square') > (find_index line2, stop2)
                    $lines[line2].reverse!
                    p plan_single_line_trip line2, 'Union Square', stop2
                end
        end
    end
end

plan_trip :n, :n, 'Union Square', 'Times Square'
plan_trip :n, :l, '34th', '3rd'