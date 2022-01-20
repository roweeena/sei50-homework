

#DEFINE FUNCTIONS

def is_triangle(a, b, c)
    if c < a + b || b < a + c || a < b + c 
       puts "true"
       return true
    else
        puts "false" 
        return false
    end
end