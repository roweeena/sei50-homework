# # Calculator

# ### Explanation
# - You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - The menu should be displayed again, and process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

def add
    puts "Choose 2 numbers to add up "
    print "Enter first number: "
    a = gets.to_i
    print "Enter second number: "
    b = gets.to_i
    result = a + b
    puts "#{a} + #{b} = #{result}"
end

def minus 
    puts "Choose 2 numbers to minus "
    print "Enter first number: "
    a = gets.to_i
    print "Enter second number: "
    b = gets.to_i
    result = a - b
    puts "#{a} - #{b} = #{result}"
end

def multiply
    puts "Choose 2 numbers to multiply"
    print "Enter first number: "
    a = gets.to_i
    print "Enter second number: "
    b = gets.to_i
    result = a * b
    puts "#{a} * #{b} = #{result}"
end

def divide
    puts "Choose 2 numbers to divide"
    print "Enter first number: "
    a = gets.to_i
    print "Enter second number: "
    b = gets.to_i
    result = a / b
    puts "#{a} / #{b} = #{result}"
end

def exponents
    puts "input number for the equation"
    print "Enter first number: "
    a = gets.to_i
    print "Enter exponent number: "
    b = gets.to_i
    result = a ** b
    puts "#{a} to the power of #{b} = #{result}"
end

def sq_root
    print "Enter number to square root:  "
    a = gets.to_i
    result = Math.sqrt(a)  
    puts "Square root of #{a} = #{result}"
end

run_cal = 'no'
until run_cal == 'yes'
    
    def calculator
        puts "1.Addition"
        puts "2.Subtraction"
        puts "3.Multiplication"
        puts "4.Division"
        puts "5.Exponents"
        puts "6.Square Roots"
        puts
        print "Choose your operation(select number): "
        output = gets.to_i
        
        case output
        when 1 
            add
        when 2
            minus
        when 3
            multiply
        when 4 
            divide
        when 5
            exponents
        when 6
            sq_root
        else
            puts "incorrect input"
        end
    end
    puts calculator
    print "Do you want to quit the calculator (yes/no): "
    run_cal = gets.chomp.downcase
end


# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)



# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# BMI Formulas · Metric units: BMI = weight (kg) ÷ height2 (m) 

def bmi_cal
        puts "Welcome to the BMI calculator"
        print "enter your height(cm): "
        height= gets.to_i
        print "enter your weight(kg): "
        weight = gets.to_i
        bmi = weight/(height ** 2)
        puts "Your BMI is: #{bmi}"

        if bmi 
end
bmi_cal

# run_BMI = 'no'
# while run_BMI == 'yes'
#     bmi_cal
#     print "would you like to restart?"
#     run_cal= gets.chomp.downcase
# end




# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour