require 'colorize'

puts "Welcome to the calculator".red
def find_sum_type
  puts "what kind of math would you like to do: ".green
    puts "Add"
    puts "Subtract"
    puts "Multiply"
    puts "Divide"
    puts "Square root"
    puts "To the power of"
    puts "Find your bmi"
  sum_type =  gets.chomp.downcase
end # end find_sum_type

def get_first
  puts "Choose a number:".blue
  gets.to_i
end #end get first

def get_second
  puts "Chose the second number:".blue
  gets.to_i
end # end get_second

def get_height
  puts "What is your height to the nearest cm".blue
  gets.to_f
end # end get_height

def get_weight 
  puts "What do you weight to the nearest kg?".blue
  gets.to_f
end # end get_weight



def do_sum(sign, first, second) 
  if sign == "to the power of"  
    first ** second
  elsif sign == "add"
    first + second
  elsif sign == "subtract"
    first - second
  elsif sign == "multiply"
    first * second
  else 
    first / second
  end# end if
end # end function


quit = "no"

while quit != "yes"

  sum_sign = find_sum_type
  if sum_sign == "square root"
    first = get_first
    result = Math.sqrt(first)
  elsif sum_sign == "find your bmi"
    height = get_height
    weight = get_weight
    result = (weight / height / height * 10000).round(2)
  else
    first = get_first
    second = get_second
    result = do_sum(sum_sign, first, second)
  end

  puts "The result is: #{result}".yellow
  puts "Do you want to quit? (yes/no)"
  quit = gets.chomp


end #end of while

puts "You have quit."
