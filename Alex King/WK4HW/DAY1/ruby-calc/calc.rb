require 'colorize'

# user_input == "Y"

def open_menu(input)
    if input == "Y"
    in_menu 
    end
end 
until $user_input == "N"
def in_menu 
    puts "welcome to the calculator! Enter a command to get started"
    puts "Basic Functions:".blue
    puts "[a]: Addition".green
    puts "[s]: Subtraction".cyan
    puts "[m]: Multiplicaton".magenta
    puts "[d]: Division".yellow
    puts "[sqr]: Square root".yellow
    puts "Special Functons: ".red
    puts "[mor]: Mortgage Calculator"
    puts "[bmi]: BMI Calculator"
    puts "[trp]: Trip Calculator"
    puts "[date]: Date Calculator"
    $user_input = gets.chomp.downcase
end
in_menu 

# colour code everything ! 
case $user_input 
when "a"
    print "enter your first number: "
    num_1 = gets.chomp.to_i
    print "enter your second number: "
    num_2 = gets.chomp.to_i
    puts "The result of #{num_1} + #{num_2} is #{num_1 + num_2}".green
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase
    # input = gets.chomp.upcase
    # open_menu(input)

when "s"
    print "enter your first number: "
    num_1 = gets.chomp.to_i
    print "enter your second number: "
    num_2 = gets.chomp.to_i
    puts "The result of #{num_1} - #{num_2} is #{num_1 - num_2}".cyan
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "m"
    print "enter your first number: "
    num_1 = gets.chomp.to_i
    print "enter your second number: "
    num_2 = gets.chomp.to_i
    puts "The result of #{num_1} * #{num_2} is #{num_1 * num_2}".magenta
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "d"
    print "enter your first number: "
    num_1 = gets.chomp.to_i
    print "enter your second number: "
    num_2 = gets.chomp.to_i
    puts "The result of #{num_1} / #{num_2} is #{num_1 / num_2}".yellow
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "sqr"
    print "enter your number: "
    num = gets.chomp.to_i
    puts "The square root of #{num} is #{Math.sqrt(num)} / ".blue
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "mor"
    print "please enter your principal amount: "
    p_amt = gets.to_f
    print "please enter your interest rate: "
    i_whole = gets.to_f
    i_amt = i_whole/100/12
    print "please enter the amount of payments left on your loan: "
    n_amt = gets.to_f
    puts "p #{p_amt}, i #{i_amt}, n #{n_amt}"
    mor_calc = p_amt * (i_amt*(i_amt+1)**n_amt) / (((1+i_amt)**n_amt) - 1)
    puts "The repayment on your mortgage is #{mor_calc}".red
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "bmi"
    print "please enter your weight (kg): "
    weight = gets.to_f
    print "please enter your height (cm): "
    height = gets.to_f
    bmi_calc = weight/(height*height)*10000
    puts "Your BMI is #{bmi_calc}".red
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

when "trp"
    print "please enter the distance to your destination (km): "
    dist = gets.to_f
    print "please enter the distance you can travel per L of petrol (km): "
    kpl = gets.to_f
    print "please enter the average cost of petrol: "
    price = gets.to_f
    print "please enter the average speed you will travel during your trip (km/h): "
    puts "your journey will cost $#{dist / kpl * price}"
    puts "Would you like to continue? [Y/N]"
    $user_input = gets.chomp.upcase

end 

end 


