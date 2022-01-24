
def menu
    puts "1. Morgage calculation"
    puts "2. BMI calculation"
    puts "3. Trip calculation"

    print "choose calculation: "
    gets.to_i

end


def mortgage
    print "Input the amount burrowed: "
    amount1 = gets.to_i
    print "Input the interest rate: "
    amount2 = gets.to_i

    result =(amount1 * amount2)/12
    puts "Your monthly payments would be $#{result}"
end

def bmi
    print "input your body weight in kg: "
    weight = gets.to_i
    print "input your height in metre: "
    height = gets.to_i

    result = weight / height**2
    puts "Yout BMI is #{result}"
end

def trip
    print "Input the distance in km: "
    distance = gets.to_i
    print "Input the km your car runs per liter of petrol: "
    petrol = gets.to_i
    print "Input the the amount the petrol per liter: "
    amount = gets.to_i
    print "Input the km your car runs per hour: "
    speed = gets.to_i

    trip_time = distance/speed
    cost = (distance/petrol) * amount
    puts "Your trip will cost #{trip_time} hour/s and $#{cost} of petrol in total."

end


case menu
when 1 then mortgage
when 2 then bmi
when 3 then trip
end