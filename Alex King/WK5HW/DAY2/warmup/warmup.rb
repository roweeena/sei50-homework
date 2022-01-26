# # Luhn Formula

# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.

# The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

# This number must pass the following test:

# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.

# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).

# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.

# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

# Write a program that, given a number, can check if it is valid per the Luhn formula.

# ```ruby
# luhn 3554
# # => false

# luhn 8763
# # => true
# ```
# 7 7 3 3 

# Do this in Ruby.

# ## Hints

# [Integer methods](https://ruby-doc.org/core-2.7.2/Integer.html)

# [Array methods](https://ruby-doc.org/core-2.7.2/Array.html)



# Get every odd value and double it 

# if these nums are over 9, you minus 9

# put nums back in original array. if arrsum / 10, = true 

def luhn(num)
    # print "#{num}: ", num.chars.map(&:to_i).reverse.map.with_index { |num, i| i.odd? ? num * 2 : num }.map { |num| num > 9 ? num - 9 : num }.inject(0, :+) % 10 == 0
    # puts ""

    p array = num.digits
    total = 0
    array.map.with_index do |digit, i|
        p digit, i
        digit *= 2 if i.odd?
        digit -=9 if digit > 9
        total += digit
    end

    p total % 10 == 0 

end

luhn 9344831749918146510599792582108390838629239139182545559414231048825163485652854337380538549307774236

# luhn("8763")
# luhn("3554")
# luhn("9344831749918146510599792582108390838629239139182545559414231048825163485652854337380538549307774236")