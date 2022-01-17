# Activity:

#     You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

# Specification:

#     The user should be asked to guess a number
#     If the user's guess is correct, the user should see a congratulatory message
#     If the user's guess is not correct, the user should be asked to guess the number again.

# Extensions:

#     Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
#     Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# print "guess a number between 1 and 10: "
# guess_num = gets.to_i
# puts guess_num
# random_num = rand(1..10).to_i
# puts random_num

# if guess_num == random_num
#     puts "good job"
# else 
#     puts "uh oh"
#     guess_num = gets.to_i
# end

# Load a library to use in our code
# Similar to script:src 
require 'colorize'
    
def get_guess
    print "enter your guess: ".blue
    return gets.to_i 
end 

def give_feedback(random, guess)
    if guess > random
        puts "guess lower".blue
    elsif guess < random
        puts "guess higher".red
    end
end 



print "input a max number to guess from: ".yellow
input_range = gets.to_i
puts "your input is #{input_range}".green
random_num = rand(1..input_range).to_i
puts "guess a number between 1 and #{input_range}"
guess_num = -1
# puts random_num 

until guess_num == random_num 

    guess_num = get_guess

    # require 'pry'; binding.pry # pause this program in pry .. like debugger; 

    give_feedback(random_num, guess_num)
end

puts "congratulations"

# secret_number = rand 10

# user_guess = -1

# until secret_number = user_guess

#     print "enter your guess (#{secret_number}):"
#     user_guess = gets.to_i

# end # while guess is wrong 

# puts "congratulations!"


# chosen_field = gets 
# random_chosen = puts rand(random_chosen)