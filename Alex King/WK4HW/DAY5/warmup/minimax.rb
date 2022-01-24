# # Mini-Max Sum
# Write a function that accepts an array of five integers and calculate and print out the minimum and maximum values that can be calculated by summing exactly four of the five integers.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7]
# # expected output: min_sum: 16; max_sum: 24
# ```
# ## Bonus
# The function can accept two arguments: an array contain any numbers of integers; and an integer that indicates how many numbers of the array to calculate minimum and maximum value from.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7, 11], 3
# # expected output: min_sum: 9; max_sum: 27
# # because min_sum = 1 + 3 + 5; max_sum = 7 + 9 + 11
# ```

require 'pry'


# find the biggest and smallest number... exclude that when summing 
# def minimax_sum (arr)
#     puts "max_sum  #{arr.sum-arr.min}"
#     puts "min_sum #{arr.sum-arr.max}"
# end 

# arr = [1,9,5,3,7]
# minimax_sum(arr)


def minimax_sum (arr, n)
    min_sum = arr.sort.take(n).inject(:+)
    puts "min sum #{min_sum}"
    max_sum = arr.sort.reverse.take(n).inject(:+)
    puts "max sum #{max_sum}"
end 

nums = [1, 9, 5, 3, 7]
minimax_sum(nums, 2)