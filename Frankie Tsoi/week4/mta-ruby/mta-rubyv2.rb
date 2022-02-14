

 subway_lines= {
  :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
  :six_line =>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  print "which line you getting on? "
  start_line = gets.chomp
  
  print "which station you getting on? "
  start_station = gets.chomp
  
  print "which station you getting off? "
  off_station = gets.chomp

  print "which line you getting off? "
  end_line = gets.chomp
  


  if start_line == "n_line" && subway_lines[:n_line].index(end_station)
     stop_amount = subway_lines[:n_line].index(end_station) - subway_lines[:n_line].index(start_station)
    stop_amount = stop_amount.abs
    puts "Your journey will take " + stop_amount.to_s + " stops"
  end

  if start_line == "l_line" && subway_lines[:l_line].index(end_station)
    stop_amount = subway_lines[:l_line].index(end_station) - subway_lines[:l_line].index(start_station)
    stop_amount = stop_amount.abs
    puts "Your journey will take " + stop_amount.to_s + " stops"
  end

  if start_line == "six_line" && subway_lines[:six_line].index(end_station)
   stop_amount = subway_lines[:six_line].index(end_station) - subway_lines[:six_line].index(start_station)
   stop_amount = stop_amount.abs
   puts "Your journey will take " + stop_amount.to_s + " stops"
  end








