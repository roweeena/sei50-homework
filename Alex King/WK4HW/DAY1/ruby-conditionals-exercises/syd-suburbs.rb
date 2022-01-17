
    # Create a program that asks what suburbs you live in.
    # Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).
    # If the program does not recognise the suburb, print a generic message like "Sounds nice!"
    # BONUS: use a case statement instead of an if-elsif chain to solve the surburns exercise.

print "what suburb do you live in? "
suburb = gets.chomp().downcase()
puts "#{suburb}:" 

case suburb 
when "castle hill"
    puts "that's where I live ! ^-^"
when "haymarket"
    puts "that's where I used to live ! I worked at Kuon ! -O-O"
else 
    puts "sorry, I'm not sure where that is ... bet it sucks if that's where you came from ... "
end

# output = case suburb 
# when "castle hill" then "that's where I live ! ^-^"
# when "haymarket" then "that's where I used to live ! I worked at Kuon ! -O-O"
# else 
#      "sorry, I'm not sure where that is ... bet it sucks if that's where you came from ... "
# end

# puts output