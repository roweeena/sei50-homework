require 'colorize'

choice = 'null'

puts 'Welcome to Your Calculator'.green

def option_menu
    puts "Input 'add' to Conduct Addition"
    puts "Input 'subtract' to Conduct Subtraction"
    puts "Input 'multiply' to Conduct Multiplication"
    puts "Input 'divide' to Conduct Division"
    puts "Input 'quit' to Quit"
    choice = gets.chomp
    choice.downcase
end # end of option_menu

def get_value order, choice

    if order == "first"
        print "What is the #{order} value would you like to #{choice}: "
        val = gets.chomp
        return val
    else
        case choice
        when 'add'
            print "And what would you like to add this to: "
            val = gets.chomp
            return val
        when 'subtract'
            print "And what would you like to subtract this from: "
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
        puts "#{num}".green
    else
        puts "#{num}".red
    end
end # end of give_result

# the calc itself
while true
    choice = option_menu

    if choice == 'quit'
        break
    end

    val1 = get_value 'first', choice
    firstNum = convert_val val1
    val2 = get_value 'second', choice
    secondNum = convert_val val2

    case choice
    when 'add'
        result = firstNum + secondNum
    when 'subtract'
        result = secondNum - firstNum
    when 'multiply'
        result = firstNum * secondNum
    when 'divide'
        result = firstNum / secondNum
    end
    give_result result
end # end of the calc loop