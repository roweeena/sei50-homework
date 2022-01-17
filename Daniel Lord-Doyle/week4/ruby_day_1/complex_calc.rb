require 'colorize'

choice = 'null'

puts 'Welcome to Your Calculator'.green

def option_menu
    puts "Input 'add' to Conduct Addition"
    puts "Input 'subtract' to Conduct Subtraction"
    puts "Input 'multiply' to Conduct Multiplication"
    puts "Input 'divide' to Conduct Division"
    puts "Input 'square' to Conduct Squaring"
    puts "Input 'root' to Square Root"
    puts "Input 'quit' to Quit"
    choice = gets.chomp
    choice.downcase
end # end of option_menu

def get_value order, choice

    if order == "first"
        if choice == 'root'
            print "What non-negative integer would you like the square root of: "
            val = gets.chomp
            return val
        elsif choice == 'square'
            print "What number would you like to square itself by: "
            val = gets.chomp
            return val
        else
        print "What is the #{order} value would you like to #{choice}: "
        val = gets.chomp
        return val
        end
    else 
        case choice
        when 'add'
            print "And what would you like to add this to: "
            val = gets.chomp
            return val
        when 'subtract'
            print "And what would you like to subtract from this: "
            val = gets.chomp
            return val
        when 'divide'
            print "And what would you like to divide this by: "
            val = gets.chomp
            return val
        when 'multiply'
            print "And what would you like to multiply this by: "
            val = gets.chomp
            return val
        end
    end
end # end of get_value

def convert_val value
    value.to_f
end # end of convert_val

def give_result num
    if num > 0
        puts "The result is: #{num}".green
    else
        puts "The result is: #{num}".red
    end
end # end of give_result

def firstNum order, choice
    val1 = get_value 'first', choice
    firstNum = convert_val val1
end

def secondNum order, choice
    val2 = get_value 'second', choice
    secondNum = convert_val val2
end

# the calc itself
while true
    choice = option_menu

    if choice == 'quit'
        break
    end

    case choice
    when 'add'
        result = firstNum('first', choice) + secondNum('second', choice)
    when 'subtract'
        result = firstNum('first', choice) - secondNum('second', choice)
    when 'multiply'
        result = firstNum('first', choice) * secondNum('second', choice)
    when 'divide'
        result = firstNum('first', choice) / secondNum('second', choice)
    when 'root'
        integer = firstNum('first', choice)
        result = Integer.sqrt(integer)
    when 'square'
        numToSquare = firstNum('first', choice)
        result = numToSquare * numToSquare
    end
    give_result result
end # end of the calc loop