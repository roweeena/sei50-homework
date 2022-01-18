# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

def bmi_rating num
    if num < 18.5
        puts "You are underweight"
    elsif num < 25
        puts "You are healthy"
    elsif num < 30
        puts "You are overweight"
    else
        puts "You are obese"
    end
end

def bmi
    print 'Weight (kgs): '
    weight = gets.chomp
    kg_weight = weight.to_f
    print 'Height (cms): '
    height = gets.chomp
    float_height = height.to_f
    height_in_m = float_height / 100
    squared_height = height_in_m.to_f * height_in_m.to_f
    bmi_measurement = kg_weight.to_f / squared_height.to_f
    puts "Your BMI measurement: #{(bmi_measurement).round(2)}"
    bmi_rating bmi_measurement
end

bmi