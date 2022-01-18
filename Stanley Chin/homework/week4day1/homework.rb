# # Calculator

# ### Explanation
# - You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - The menu should be displayed again, and process should continue until the user selects a quit option from the menu

def menu
    puts "add adds the number"
    puts "subtract subtract the number"
    puts "multiply mumplies the number"
    puts "divide divides the number"
    puts "finish ends the process"
end

def add(number1, number2)
    puts("#{number1 + number2}")
end

def subtract(number1, number2)
    puts("#{number1 - number2}")
end

def mulitply(number1, number2)
    puts("#{number1 * number2}")

end

def divide(number1, number2)
    puts("#{number1 / number2}")

end


def number1
puts "Number1 to do the jiggy with: "
gets.to_i
end

def number2
puts "Number2 to do the jiggy with: "
gets.to_i
end

user_function = true

def function_initial
puts "function you want: "
gets.chomp
end


while user_function
    menu
    function_user = function_initial
    if function_user == "finish"
        break
    else
    numerouno = number1
    numerodos = number2
    case function_user
        
        when "add" then add numerouno, numerodos
        when "subtract" then subtract numerouno, numerodos
        when "multiply" then multiply numerouno, numerodos
        when "divide" then divide numerouno, numerodos
        when "finish" then user_function == false

    end
end
end


# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour



