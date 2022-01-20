# puts "hello world"
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW
def clculator_op


puts "Enter a number:"
num1 = gets.chomp().to_f
puts "Enter the operator:"
operator = gets.chomp()
puts "Enter a number:"
num2 = gets.chomp().to_f
if operator == "+"
    print (num1 + num2)
elsif operator == "-"
    print (num1 - num2)
elsif operator == "/"
    print (num1 / num2)
elsif operator == "*"
    print (num1 * num2)
    els
else
    puts "invalid operator"
end
end
clculator_op







# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

