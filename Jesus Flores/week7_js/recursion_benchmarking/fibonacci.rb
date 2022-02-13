#Recursive Fibonacci sequence
require 'benchmark/ips'
def fib_loop(n = 30) 
    a = 1
    b = 1
    n.times do 
        temp = a
        a = b 
        b = a + temp
    end
    a
end

 def fib_rec_no_memoization(n = 30) 
    if n < 2
        return 1
    else
        return fib_rec_no_memoization(n-1) + fib_rec_no_memoization(n-2)
    end
 end


@hash_memory_object = {}
 def fib_rec_with_memoization_hash(n = 30)
    if @hash_memory_object.has_key?(n) 
        @hash_memory_object[n]
    elsif n < 2
        1
    else
        @hash_memory_object[n] = fib_rec_with_memoization_hash(n-1) + fib_rec_with_memoization_hash(n-2)
    end
 end

 @hash_memory_array = []
 def fib_rec_with_memoization_array(n = 30)
    if n < 2
        1
    else
        @hash_memory_array[n] || @hash_memory_array[n] = fib_rec_with_memoization_array(n-1) + fib_rec_with_memoization_array(n-2)
    end
 end
 

 Benchmark.ips do |x|
    x.config(:time => 10, :warmup => 2) #change time value to see how many iterations times n
    x.report('fib_loop: ')        { fib_loop(32) } # change the value 
    x.report('fib_rec_no_memoization: ') { fib_rec_no_memoization(32) } # change the value
    x.report('fib_rec_with_memoization_hash: ') { fib_rec_with_memoization_hash(32) } # change the value
    x.report('fib_rec_with_memoization_array: ') { fib_rec_with_memoization_array(32) } # change the value
    x.compare!
end
