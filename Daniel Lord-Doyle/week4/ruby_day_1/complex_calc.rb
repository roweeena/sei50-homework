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
            gets.chomp
        elsif choice == 'square'
            print "What number would you like to square itself by: "
            gets.chomp
        else
        print "What is the #{order} value would you like to #{choice}: "
        gets.chomp
        end
    else 
        case choice
        when 'add'
            print "And what would you like to add this to: "
            gets.chomp
        when 'subtract'
            print "And what would you like to subtract from this: "
            gets.chomp
        when 'divide'
            print "And what would you like to divide this by: "
            gets.chomp
        when 'multiply'
            print "And what would you like to multiply this by: "
            gets.chomp
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

def ask_for_num order, choice
    val1 = get_value order, choice
    convert_val val1
end

# the calc itself
while true
    choice = option_menu

    if choice == 'quit'
        break
    end

    case choice
    when 'add'
        result = ask_for_num('first', choice) + ask_for_num('second', choice)
    when 'subtract'
        result = ask_for_num('first', choice) - ask_for_num('second', choice)
    when 'multiply'
        result = ask_for_num('first', choice) * ask_for_num('second', choice)
    when 'divide'
        result = ask_for_num('first', choice) / ask_for_num('second', choice)
    when 'root'
        integer = ask_for_num('first', choice)
        result = Integer.sqrt(integer)
    when 'square'
        numToSquare = ask_for_num('first', choice)
        result = numToSquare * numToSquare
    end
    give_result result
end # end of the calc loop