print "which operation would you like to perform? (add / minus / multiply / divide): "
operation = gets.chomp
def add
  print "Enter the 1st number: "
  num1 = gets.to_f
  print "Enter the 2nd number: "
  num2 = gets.to_f
  add_result = num1 + num2
  puts "the sum is #{add_result}"
end
def minus
     print "Enter the 1st number: "
     num1 = gets.to_f
     print "Enter the 2nd number: "
     num2 = gets.to_f
     minus_result = num1 - num2
     puts "the sum is #{minus_result}"
end
def multiply
     print "Enter the 1st number: "
     num1 = gets.to_f
     print "Enter the 2nd number: "
     num2 = gets.to_f
     multiply_result = num1 * num2
     puts "the sum is #{multiply_result}"
end
def divide
     print "Enter the 1st number: "
     num1 = gets.to_f
     print "Enter the 2nd number: "
     num2 = gets.to_f
     if num2 == 0
          puts "cannot divide by 0"
     else 
       divide_result = num1 / num2
       puts "the sum is #{divide_result}"
     end
end

if operation == "add"
          add
     elsif operation == "minus"
          minus
     elsif operation == "multiply"
          multiply
     elsif operation == "divide"
          divide
end
