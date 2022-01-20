require 'colorize'

# method that displays the options and asks the user to choose, returns the selection 
def operation_sel
  puts 'WELCOME TO THE CALCULATOR'.blue
  puts 'Please choose from the following options: '.blue
  puts "'a'   = addition".red
  puts "'b'   = subtraction".red
  puts "'c'   = multiplication".red
  puts "'d'   = division".red
  puts "'e'   = exponent".red
  puts "'f'   = logathim".red
  puts "'m'   = mortgage monthly repayments".red
  puts "'bmi' = body mass index".red
  puts "'t'   = trip".red
  puts "'q'   = quit".red
  print 'What would you like to do? '.yellow
  gets.chomp.downcase
end

# addition method
def add a, b
  a + b
end

# subtraction method
def subtract a, b
  a - b
end

# multiplication method
def multiply a, b
  a * b
end

# division method
def divide a, b
  a / b
end

# exponent method
def power a, b
  a**b
end

# logarithm method
def logarithm a, b
  Math.log(a) / Math.log(b)
end

# mortgage method
def mortgage_calculator
  print "What is the principal amount: "
  principal = gets.to_f
  
  print "What is the interest rate: "
  interest = gets.to_f
  interest = interest / 12
  print "How many months: "
  num_payments = gets.to_f
  
  result = principal * (interest * ( interest + 1.0)  ** num_payments ) / ((( 1.0 + interest ) ** num_payments ) - 1.0) 

  puts 
  puts "Your repayments will be $#{result.round 2} per month".green
  puts 

end

# bmi method
def bmi
  print "Enter height in cm: "
  height_cm = gets.to_f

  print "Enter weight in kg: "
  weight_kg = gets.to_f

  result = (weight_kg / height_cm / height_cm) * 10_000.0

  puts
  puts "BMI is #{result.round 2}".green
  puts 
  

end 

#trip method
def trip
  print "How far in kms: "
  distance = gets.to_f
  print "How many km per litre of fuel: "
  economy = gets.to_f
  print "What is the price of fuel per litre in dollers: "
  price = gets.to_f
  print "How fast in km/h will you travel: "
  speed = gets.to_f

  trip_time = (distance / speed)
  trip_cost = (distance / economy) * price

  puts
  puts "Your trip will take #{trip_time.round 2} hours and will cost $#{trip_cost.round 2}.".green
  puts
  

end

# calculator method
def calculator operation

  if operation == 'q'
    return
  end

  if operation == 'm'
    mortgage_calculator
    return
  end

  if operation == 'bmi'
    bmi
    return
  end 

  if operation == 't'
    trip
    return
  end

  print "Please enter the first number: ".yellow
  first_num = gets.to_f

  print "Please enter the second number: ".yellow
  second_num = gets.to_f
  
  result = case operation
  when 'a'  then add first_num, second_num
  when 'b'  then subtract first_num, second_num
  when 'c'  then divide first_num, second_num
  when 'd'  then multiply first_num, second_num
  when 'e'  then power first_num, second_num
  when 'f'  then logarithm first_num, second_num
  
  end #result

  puts
  puts result # display the result
  puts

end #calculator

selected_operation = 'nope'

# looping the calculator
until selected_operation == 'q'

  selected_operation = operation_sel

  calculator selected_operation

end




