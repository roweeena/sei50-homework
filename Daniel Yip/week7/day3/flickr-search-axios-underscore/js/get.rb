require 'httparty'

# This request is made over the network......
res = HTTParty.get 'http://numbersapi.com/42?json'
# AND THE PROGRAM PAUSES (blocks) HERE UNTIL THE RESPONSE IS RECIEVED... 
# i.e. This is a syncronous/blocking request
puts res