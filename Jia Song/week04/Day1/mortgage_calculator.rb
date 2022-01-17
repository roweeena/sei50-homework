require 'colorize'


# 1. total mortgage
print("Total mortgage: ")
total_mortgage = gets.to_f

# 2. mortgage term
print("Mortgage term (month): ")
mortgage_term = gets.to_f

# 3. interest
print("Interest: ")
interest = gets.to_f

def calc_mortgage(total, term, interest)
  total * ( interest * (1+interest)**term ) / ( (1+interest)**term - 1 )
end

# 4. get a monthly mortgage with the function
monthly_payment = calc_mortgage(total_mortgage, mortgage_term, interest)

# 5. print the result
puts "
  Your mortgage is $#{total_mortgage}
  Your interest is #{interest}
  Your monthly payment is $#{monthly_payment.floor(2)}".yellow