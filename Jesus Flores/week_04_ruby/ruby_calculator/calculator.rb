def menu()
   puts 'Select from menu: 
         1: Addition +
         2: Substraction -
         3: Multiplication *
         4: Division /
         5: Mortgage
         6: Exit'
   option = gets.chomp.to_i
   case option
   when 1 
         addition()
   when 2
      substraction()
   when 3
      multiplication()
   when 4
      division()
   when 5
      calculate_paymentes()
   else
      puts 'Bye!' 
   end
end 


def addition()
   puts 'Enter first number'
   number_1 = gets.chomp.to_f
   puts 'Enter second number'
   number_2 = gets.chomp.to_f
   puts "Result of  #{number_1} + #{number_2}: #{number_1 + number_2}"
   carry_or_exit()
end

def substraction()
   puts 'Enter first number'
   number_1 = gets.chomp.to_f
   puts 'Enter second number'
   number_2 = gets.chomp.to_f
   puts "Result of  #{number_1} - #{number_2}: #{number_1 - number_2}"
   carry_or_exit()
end
def multiplication()
   puts 'Enter first number'
   number_1 = gets.chomp.to_f
   puts 'Enter second number'
   number_2 = gets.chomp.to_f
   puts "Result of  #{number_1} * #{number_2}: #{number_1 * number_2}"
   carry_or_exit()
end

def division()
   puts 'Enter first number'
   number_1 = gets.chomp.to_f
   puts 'Enter second number'
   number_2 = gets.chomp.to_f
   puts "Result of  #{number_1} / #{number_2}: #{number_1 / number_2}"
   carry_or_exit()
end


def carry_or_exit()
   puts "Do want to do another operation y/n?"
   check = gets.chomp
   if check == 'y'
      menu()
   end
   puts 'Thank you for using this shitty calculator'
end

def calculate_paymentes()
   #mor = p * (i*(i+1)^n) / (((1+i)^n) - 1) 
   #p = principal amt, i = interest, n = number of payments 
   puts "Input total amount please:"
   total_loan_amount = gets.chomp.to_f
   puts "Inerest  rate"
   rate = gets.chomp.to_f/100
   puts "Number of payments"
   time = gets.chomp.to_i
   interest = (1+rate/12)**(12/12)-1
   yearly = (1-(1/(1+interest))**time)/interest 
   monthly_repayments = total_loan_amount/yearly
   puts "#{monthly_repayments.to_i} Monthly" 
   menu()
  
end


menu()
