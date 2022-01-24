puts "This calculator will calculate how much will your mortgage repayments be per month. Our standard interest rate is 2.30% "
puts "Please enter how much would you like to borrow"
amount=gets.to_i
puts "Please enter your length of loan in years"
year=gets.to_i
result=amount*(0.0019*((1+0.0019)**(year*12)))/((1+0.0019)**(year*12)-1)
puts "Your monthly mortgage payment is #{result} with principal and interest payment type"