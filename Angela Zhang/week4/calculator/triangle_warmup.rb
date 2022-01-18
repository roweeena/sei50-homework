# # Is this a triangle? 
# ### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of the given lengths and false in any other case.
require 'colorize'

# run_triangle = "yes"

# until run_triangle == "no"
#     def triangle
#         puts " let's check if its a triangle. Give me the value of all 3 sides."
#         print "first side value: "
#         a = gets.to_i
#         print "second side value: "
#         b = gets.to_i
#         print "last side value: "
#         c = gets.to_i

#         if a + b > c && a + c > b && b + c > a
#             puts "It's a triangle".green
#         else
#             puts "its not a triangle".red
#         end
        
#     end
#     triangle
#     print "Would you like to try another input?(yes/no)"
#     run_triangle= gets.chomp.downcase
# end

# # solution 1

def is_triangle (a,b,c)
    max = [a,b,c].max
    sum = a + b + c
    puts sum - max > max
end

is_triangle(1,2,2) #true
is_triangle(5,1,2) #false
is_triangle(4,2,3) #true


def menu
    puts "//_\\//_\\".blue*10
    puts "TRIANGLE".light_magenta.center(50)
    puts ">><<>><<".yellow*12
    print "[e] to enter a value, [q] to quit"
end

menu
user_choice= gets[0].downcase

until user_choice == "q"
    print "enter a number: "
    x = gets.chomp.to_i
    print "enter another number: "
    y = gets.chomp.to_i
    print "enter last number: "
    z = gets.chomp.to_i

    is_triangle(x,y,z)

    menu
    user_choice = gets[0].downcase
end