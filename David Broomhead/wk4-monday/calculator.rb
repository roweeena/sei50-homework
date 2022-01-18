def addition_calc
    puts "addition mode, enter first number"
    first_number = gets.to_i
    puts "enter second number"
    second_number = gets.to_i
    result = first_number + second_number
    puts "the result of that calculation is #{result}"
end

def subtraction_calc
    puts "subtraction mode, enter first number"
    first_number = gets.to_i
    puts "enter second number"
    second_number = gets.to_i
    result = first_number - second_number
    puts "the result of that calculation is #{result}"
end

def multi_calc
    puts "multiplation mode, enter first number"
    first_number = gets.to_i
    puts "enter second number"
    second_number = gets.to_i
    result = first_number * second_number
    puts "the result of that calculation is #{result}"
end

def div_calc
    puts "division mode, enter first number"
    first_number = gets.to_i
    puts "enter second number"
    second_number = gets.to_i
    result = first_number / second_number
    puts "the result of that calculation is #{result}"
end

def exp_calc
    puts "exponents mode, enter first number"
    first_number = gets.to_i
    puts "enter second number"
    second_number = gets.to_i
    result = first_number**second_number
    puts "the result of that calculation is #{result}"
end

def sqrt_calc
    puts "square root mode, enter number"
    number = gets.to_i
    result = Math.sqrt(number)
    puts "the result of that calculation is #{result}"
end



def calculator

    loop do

    puts "Please choose a function from the menu: (1) addition (2) subtraction (3) multiplication (4) division (5) exponent (6) square root (9) quit"
    user_choice = gets.to_i

    if user_choice == 1
        addition_calc
    elsif user_choice == 2
        subtraction_calc
    elsif user_choice == 3
        multi_calc
    elsif user_choice == 4
        div_calc
    elsif user_choice == 5
        exp_calc
    elsif user_choice == 6
        sqrt_calc
    elsif user_choice == 9
        break
    else
        puts "make a valid selection"
    end #end if else choices

end #loop


end #end calculator


calculator 

