# assuming that you're putting in the right symbol
def get_route( station_start, line_start, station_stop, line_stop )
    def get_one_line (start, stop, line)
        lines = { 
            N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
            L: ['8th', '6th', 'Union Square', '3rd', '1st'],
            Six:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
        }
        
        start_I = lines[line].index(start)
        stop_I = lines[line].index(stop)

        if start_I > stop_I
            # reverse line 
            lines[line][stop_I..start_I].reverse
        else
            #standard
            lines[line][start_I..stop_I]
        end
    end

    # if different starting and stopping lines then need to go to Union first then from union second line to last stop
    if line_start != line_stop
        route_1 = get_one_line(station_start, 'Union Square', line_start)
        route_2 = get_one_line( 'Union Square',station_stop, line_stop)
        route_2.shift # remove the duplicate Union Square
        p 'Changing at Union Square'
        p stops = route_1 + route_2
        
    else
        p stops = get_one_line(station_start, station_stop, line_start)
    end

    p "the total number of stops: #{stops.length}"
end

get_route('Times Square', :N, '1st', :L)