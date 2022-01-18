def is_triangle(a, b, c)
  if (a + b > c) && (a + c > b) && (b + c > a)
    puts true
  else
    puts false
  end
end

is_triangle(1, 2, 2) #true
is_triangle(5, 1, 2) #false
is_triangle(4, 2, 3) #true

def menu
  puts "                 △                   "
  puts "                △△△                  "
  puts "               △△△△△△                "
  puts "            △△△△△△△△△△△△△            "
  puts "         △△△△△△△△△△△△△△△△△△△         "
  puts "    △△△△Triangle Calculator△△△△△     "
  print "Give me 3 sides:"
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  c = gets.chomp.to_i
  if (a + b > c) && (a + c > b) && (b + c > a)
    puts "IT IS A TRIANGLE"
  else
    puts "IT IS NOT A TRIANGLE"
  end
end

menu
