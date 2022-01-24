

#DEFINE FUNCTIONS

def addition(num1, num2)
    puts "#{num1} + #{num2} = #{num1 + num2}"
    num1 + num2
end

def subtraction(num1, num2)
    puts "#{num1} - #{num2} = #{num1 - num2}"
    num1 - num2
end

def multiplication(num1, num2)
    puts "#{num1} x #{num2} = #{num1 * num2}"
    num1 * num2
end

def division(num1, num2)
    puts "#{num1} / #{num2} = #{num1 / num2}"
    num1 / num2
end

def exponential(num1, num2)
    puts "#{num1}^#{num2} = #{num1 ** num2}"
    num1 ** num2
end

def nth_root(num1, num2)
    puts "#{num1}^(1/#{num2}) = #{num1 ** (1 / num2)}"
    num1 ** (1 / num2)
end

def mortgage
    print "Principal: "
    principal = gets.to_f
    print "Interest: "
    interest = gets.to_f
    print "Number of Payments: "
    payments = gets.to_f
    puts "Your monthly payments are $#{principal * (interest * (interest + 1) ** payments) / (((1 + interest) ** payments) - 1)}"
    principal * (interest * (interest + 1) ** payments) / (((1 + interest) ** payments) - 1)
end

def bmi
    print "Weight(kg): "
    weight = gets.to_f
    print "Height(cm): "
    height = gets.to_f
    puts "Your BMI = #{weight/(height * height) * 10000}"
    weight/(height * height) * 10000
end

def trip
    print "Distance: "
    distance = gets.to_f
    print "Kilometers per litre: "
    kpl = gets.to_f
    print "Price per litre: "
    ppl = gets.to_f
    print "Speed in kilometres per hour: "
    speed = gets.to_f
    puts "Your #{distance}km trip will take #{distance / speed} hours to complete. You will use #{distance / kpl} litres of fuel, and spend $#{distance / kpl * ppl}."

end
#MAIN 
is_calculator_running = true;

while is_calculator_running 
    puts "Calculator\nPlease select an operation:"
    puts "1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exponentials - Enter the power as the second number\n6. Nth Root - Enter the n as the second number\n7. Mortgage\n8. BMI\n9. Trip Calculator"
    puts "0. Exit Program"
    selection = gets.to_i

    if selection >= 1 && selection <= 06
        print "Please select the first number of the equation: "
        first_num = gets.to_f
        print "Please select the second number of the equation: "
        second_num = gets.to_f
    end 


    case selection
    when 1  then addition(first_num, second_num)
    when 2  then subtraction(first_num, second_num)
    when 3  then multiplication(first_num, second_num)
    when 4  then division(first_num, second_num)
    when 5  then exponential(first_num, second_num)
    when 6  then nth_root(first_num, second_num)
    when 7  then mortgage
    when 8  then bmi
    when 9  then trip
    when 0  then is_calculator_running = false
    else         puts "Invalid Option, please select the number that correlates to a function"
    end

end
