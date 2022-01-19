# # Is this a triangle? 
# ### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

# ### Examples
# ```
#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true
# ```

# ## Bonus
# Create a menu that will allow for user input and add some decorations
require 'colorize'

# def menu 
#     puts "", "welcome to the triangle checker!".blue, "", "triangle inequality theorem: the sum of the lengths of any two sides of a triangle is greater than the length of the third side".red, ""
# end 
# menu

# def triangle_check(a, b, c)
#     if a+b>c && b+c>a && c+a>b
#         puts "this triangle can exist".cyan
#     else 
#         puts "this triangle cannot exist".magenta
#     end
# end 

# print "please enter the length of the first side: ".green
# a = gets.to_i
# print "please enter the length of the second side: ".green
# b = gets.to_i
# print "please enter the length of the third side: ".green
# c = gets.to_i

# triangle_check(a, b, c)

def is_triangle (a, b,  c)
    puts a + b > c && b + c > a && c + a > b
    # max = [a, b, c].max
    # sum = a + b + c
    # puts sum-max >max
end

is_triangle(1, 2, 2)
is_triangle(5, 1, 2)
is_triangle(4, 2, 3)

def menu
    puts "//_\\//_\\".blue * 10
    puts "TRIANGLE".light_magenta.center(50)
    puts ">><<<>><<".yellow * 12
    print "[e] to enter a value, [q] to quit "
end 


menu
user_choice = gets[0].downcase

until user_choice == "q"
    print "Enter a number: "
    x = gets.chomp.to_i
    print "Enter another number: "
    y = gets.chomp.to_i
    print "Enter the last number: "
    z = gets.chomp.to_i

    is_triangle(x,y,z)
end 

menu
user_choice = gets[0].downcase
end 

puts "Thanks for input"