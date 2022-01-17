# CALCULATOR

def num1
    print "Please enter the first number: "
    gets.to_i
end

def num2
    print "Please enter the second number: "
    gets.to_i
end

def add x, y
    puts "#{x} + #{y} = #{x + y}"
end

def subtract x, y
    puts "#{x} - #{y} = #{x - y}"
end

def multiply x, y
    puts "#{x} x #{y} = #{x * y}"
end

def divide x, y
    puts "#{x} / #{y} = #{x / y}"
end

def sqrt x
    puts "The square root of #{x} = #{Integer.sqrt(x)}"
end

def exp x, y
    puts "#{x} to the power of #{y} = #{x**y}"
end


def menu
    puts "What would you like to do?

        1. Add
        2. Subtract
        3. Multiply
        4. Divide
        5. Square Root
        6. Exponents
        
        9. Quit
        "
end

def menu_option
    print "Please select a number to continue: "
    gets.to_i
end

loop do
    menu
    case menu_option
    when 1 then add num1, num2
    when 2 then subtract num1, num2
    when 3 then multiply num1, num2
    when 4 then divide num1, num2
    when 5 then sqrt num1
    when 6 then exp num1, num2

    when 9 then break
    end
end

# MORTGAGE CALCULATOR

