def main
  puts "You can use these operations to do the calculation:"
  puts "addition,substract,multiply,divide,exponents,squareroot"
  puts "Which operation would you like to use? If you would like to quit the program, please enter 'quit'"
  gets.chomp.downcase
end

def addition
  num1 = gets.to_i
  num2 = gets.to_i
  sum = num1 + num2
  puts "#{num1}+#{num2}=#{sum}"
end

def substract
  num1 = gets.to_i
  num2 = gets.to_i
  puts "#{num1}-#{num2}=#{num1 - num2}"
  puts "#{num2}-#{num1}=#{num2 - num1}"
end

def multiply
  num1 = gets.to_i
  num2 = gets.to_i
  product = num1 * num2
  puts "#{num1}x#{num2}=#{product}"
end

def divide
  num1 = gets.to_i
  num2 = gets.to_i
  quotient = num1 / num2
  puts "#{num1}÷#{num2}=#{quotient}"
end

def exponents
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 ** num2
  puts "#{num1}^#{num2}=#{result}"
end

def squareroot
  num1 = gets.to_i
  result = Math.sqrt(num1)
  puts "√#{num1}=#{result}"
end

operation = main
until operation == "quit"
  case operation
  when "addition"
    puts addition
  when "substract"
    substract
  when "multiply"
    multiply
  when "divide"
    divide
  when "exponents"
    exponents
  when "squareroot"
    squareroot
  else
    main
  end
  operation = main
end
