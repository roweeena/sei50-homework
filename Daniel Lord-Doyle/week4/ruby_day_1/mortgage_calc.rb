require 'colorize'

'Welcome to the Mortgage Calculator'.green

def house_price
    print 'House price: '
    val = gets.chomp
    val.to_f
end

def downpayment
    print 'How much cash do you have for a downpayment: '
    val = gets.chomp
    val.to_f
end

def mortgage_principle price, downpayment
    principle = price - downpayment
    principle.to_f
end

def annual_interest_rate
    puts 'Choose from: '
    puts '1: 1% Annual Interest Rate - 10 years'
    puts '2: 2% Annual Interest Rate - 20 years'
    puts '3: 3% Annual Interest Rate - 30 years'
    puts 'Simply type 1, 2 or 3'
    air = gets.chomp
end

def monthly_interest_rate annual_rate
    # val = annual_rate.to_i
    # float = val/12.to_f
    # float
    case annual_rate
    when '1'
        return 0.08333333333333333
    when '2'
        return 0.16666666666666666
    when '3'
        return 0.25
    end
end

def payment_months annual_rate
    case annual_rate
    when '1'
        return 10 * 12
    when '2'
        return 20 * 12
    when '3'
        return 30 * 12
    end
end

def monthly_payment
    price_val = house_price
    downpayment_val = downpayment
    mortgage_principle_val = mortgage_principle price_val, downpayment_val

    air = annual_interest_rate
    mir = monthly_interest_rate air
    months_to_pay = payment_months air

    monthly_non_interest_payment = mortgage_principle_val / months_to_pay
    monthly_interest = monthly_non_interest_payment * mir
    total_monthly_payment = monthly_non_interest_payment + monthly_interest

    puts "Your monthly interest will be $#{mir}%."
    puts "Your payment each month without interest will be $#{(monthly_non_interest_payment).round(2)}."
    puts "Your monthly interest will be $#{(monthly_interest).round(2)}."
    puts "So you will be paying a total of $#{(total_monthly_payment).round(2)} for #{months_to_pay} months."
end

monthly_payment