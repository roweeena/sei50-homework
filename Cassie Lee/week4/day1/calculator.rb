# user_choice = menu

def menu
    puts "1. Addition"
    puts "2. Subtraction"
    puts "3. Multiply"
    puts "4. Division"
    puts "5. Exponential"
    puts "6. Square Roots"

    print "choose calculation: "
    gets.to_i
end

def stringToInt 
    print" Input your first number: "
    $first = gets.to_i
    print "Input your second number: "
    $second = gets.to_i
end

def add
    stringToInt
    result = $first + $second
    puts "#{result}"
    #add
end

def subtract
    stringToInt
    result = $first - $second
    puts "#{result}"
    #subtract
end

def multi
    stringToInt
    result = $first * $second
    puts "#{result}"
    #multi
end

def divide
    stringToInt
    result = $first / $second
    puts "#{result}"
    #divide
end

def expo 
    print" Input your number: "
    first = gets.to_i
    print" Raising your number by power of?  "
    second = gets.to_i
    result = first**second
    puts "#{result}"
    #expo
end

def square
    print" Input your number: "
    first = gets.to_i
    result = Math.sqrt(first).
    puts "#{result}"
end

case menu
when 1 then add
when 2 then subtract
when 3 then multi
when 4 then divide
when 5 then expo
when 6 then square
else
    puts "Please choose one of the following option"
    menu
end





