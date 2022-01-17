def get_time_cost(distance, mpg, ppg, speed)
    time = distance / speed
    cost = distance / mpg * ppg

    puts "time taken is #{time}"
    puts "cost for journey is #{cost}"
end

get_time_cost(1000, 54.64, 3.163, 50)