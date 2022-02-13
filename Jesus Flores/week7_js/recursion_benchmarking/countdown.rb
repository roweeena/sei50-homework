require 'benchmark/ips'
def countdown (n = 10)
    while n>= 0
        #puts n
        n = n - 1
    end
   #puts 'Blast off!'
end

def countdown_rec( n = 10)
    if n < 0
        #puts "Blats off!"
    else
        #not finish counting yet 
        #p n
        countdown_rec (n - 1)
    end

end

Benchmark.ips do |x|
    x.config(:time => 10, :warmup => 2) #change time value to see how many iterations times n
    x.report('countdown: ')        { countdown(100) }
    x.report('countdown_rec: ') { countdown_rec(100) }
    x.compare!
end

