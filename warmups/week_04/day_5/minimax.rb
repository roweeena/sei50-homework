# # Mini-Max Sum
# Write a function that accepts an array of five integers and calculate and print out the minimum and maximum values that can be calculated by summing exactly four of the five integers.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7]
# # expected output: min_sum: 16; max_sum: 24
# ```

#declaring the function

# def minimax_sum arr
#   first_sum = 0
#   second_sum = 0
#
#   #sort the array
#   p sorted_arr = arr.sort
#   #take the first 4 elements and loop through to sum
#   mini_sum = sorted_arr.take(4)
#   #p mini_sum
#   mini_sum.each do |num|
#     first_sum += num
#     #p first_sum, num
#   end
#   #count the sum of the last 4 elements
#   max_sum = sorted_arr.drop(1)
#   max_sum.each do |num|
#     second_sum += num
#   end
#
#   p "The min sum is #{first_sum} and the max sum is #{second_sum}"
#
#   # min_sum = sorted_arr.take(4).inject(:+) => magical version
# end
#
#  minimax_sum [1, 9, 5, 3, 7]



# ## Bonus
# The function can accept two arguments: an array contain any numbers of integers; and an integer that indicates how many numbers of the array to calculate minimum and maximum value from.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7, 11], 3
# # expected output: min_sum: 9; max_sum: 27
# # because min_sum = 1 + 3 + 5; max_sum = 7 + 9 + 11

# ```

def minimax_sum arr, num
  p sorted_arr = arr.sort

  min_sum = sorted_arr.take(num).inject{|sum, num|
    p sum+num
  }

  p "min sum is #{min_sum}"

  max_sum = sorted_arr.drop(arr.size - num).inject(:+) #injecting the plus operator in between all the elements in the array

  p "max sum is #{max_sum}"
end

minimax_sum [1, 9, 5, 3, 7, 11], 3
