# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

#     If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
#     If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "a/c works? [Y/N]"
ac_works = gets.chomp.upcase

puts "current temp?"
current_temp = gets.chomp.to_i


if ac_works == "Y" && current_temp>=24
    puts "turn on the a/c now!"
elsif ac_works == "N" && current_temp<=14 
    puts "fix the damn a/c! it's cold" 
elsif ac_works == "N" && current_temp>=24
    puts "fix the damn a/c!"
end

# If you don't want to use elsif, but else, you will need to end a nested condition 