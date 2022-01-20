#assuming monthly compounding, 
def calc_monthly_repay( amount, interest, length_loan)
    n = p length_loan * 12
    r = p interest / 12
    a = p r *(1 + r)** n
    b = p ((1 + r) ** n - 1)
    total = p amount * a / b
    puts "monthly pay: $#{total.round(2)}"
    puts "interest: $#{(total * n - amount).round(2)}"
    return total
end

calc_monthly_repay(500_000, 0.025, 25)