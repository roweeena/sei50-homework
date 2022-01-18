def runCalc 
    operations = ['+', '-', '*', '/']
    complex_operations = ['sqrt', 'exp']

    while true
        # TODO: refactor this quitting function. 
        # def quit(input)
        #     if input == 'q'
        #         break;
        #     end 
        # end

        puts 'enter first number:'
        first_number = gets.chomp
        if first_number == 'q'
            break;
        end 
        first_number = first_number.to_i

        puts 'choose between the following operations', operations, complex_operations, '-----'
        chosen_operator = gets.chomp 
        if chosen_operator == 'q'
            break;
        end

        if operations.include? chosen_operator
            puts 'enter second number:'
            second_number = gets.chomp
            if second_number == 'q'
                break;
            end 
            second_number = second_number.to_i
        end
    
        result = case chosen_operator
        when '+'
            first_number + second_number
        when '-'
            first_number - second_number
        when '*'
            first_number * second_number
        when '/'
            first_number / second_number
        when 'sqrt'
            Math.sqrt(first_number)
        when 'exp'
            Math.exp(first_number)
        end

        puts "result: #{result}"
        puts '-----'
    end    
end

runCalc