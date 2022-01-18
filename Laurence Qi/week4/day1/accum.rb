def accum(s)
	# your code
    accum_word = ''
    
    for i in 0...s.length do
        accum_word += s[i].upcase
        accum_word += s[i].downcase * i

        if i < s.length - 1
            accum_word += '-'
        end
    end

    p accum_word
end


accum('abc')