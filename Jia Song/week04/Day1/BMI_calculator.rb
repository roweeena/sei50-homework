# 1. get a user's height
print("Your height(cm): ")
user_height = gets.to_i

# 2. get user's weight
print("Your weight(kg): ")
user_weight = gets.to_i

def getBMI(height, weight)
  weight / ((height * height) / 10000)
end

# 3. run the function and print the output
puts getBMI(user_height, user_weight)