require 'colorize'


def get_operation()
  print "
  You can use +, -, /, %, *, ^ operations. If you want to quit, enter quit
  Enter a operation: ".blue
  gets.chomp
end


def calculate(num1, num2, operation)
  case operation
  when "+"
    "num1 + num2 = #{num1+num2}"
  when "-"
    "num1 - num2 = #{num1-num2}"
  when "/"
    "num1 / num2 = #{num1/num2}"
  when "%"
    "num1 % num2 = #{num1%num2}"
  when "*"
    "num1 * num2 = #{num1*num2}"
  when "^"
    "num1 ^ num2 = #{num1**num2}"
  else 
    "Wrong operator"
  end
end


# 1. first operator
# get a operator here first, and get a operator again at the end of the loop
# so that a user can get out of the loop instantly when they enter "quit"
user_operation = get_operation

until user_operation == "quit"
  # 2. get a first number
  print "Enter a first number: ".green
  first_number = gets.to_f

  # 3. get a second number
  print "Enter a second number: ".green
  second_number = gets.to_f

  # 4. calculate them and print the output
  puts calculate(first_number, second_number, user_operation).red

  # 5. get a operater for next calculation before starting next loop
  user_operation = get_operation
end