
require 'pry'

# Class names are ALWAYS capitalized in Ruby
class Person

    # Ask Ruby to write the getter and setter methods 
    # for us - for both these instance variables 
    attr_accessor :name, :location, :age

# you can have an empty class! 
# ... boring

# 'self' here is NOT 'inside' the function body,
# so it doesn't refer to "the current object"...
# referes to the class Person 
def self.explain
    puts "This is a class for creating people... and apparently also breeding them."
end





def +(other_person)
    baby_name = @name + ' ' + other_person.name
    Person.new baby_name, 'here'
end # end +()

# if you define a method called 'initialize' in 
    # your class, THAT is the method that is called
    # when you run 'Person.new'
    # i.e. This is the new 'constructor function' - used
    # to create a new object 
    def initialize (first_name, location)
        puts "initialize() was called"
        puts "Birthing new person called #{first_name}"
    
        # Saaving the local variable (parameter) first_name
        # into a "more global" variable with an '@'
        # This variable is called an "instance variable"
        # and is visible within all methods of the 
        # object (instance)
        @name = first_name
        @location = location
        @lucky_number = rand 10
        # @age = 20 
    # implicit return DOES NOT APPLY HERE 
    # - the function always gives you an instance
    # (an object of the class)

    end # initialize

# You can have a class that is really just
# a container for methods,
# i.e. no local data (variables)

    # GETTERS for instance variables:

    # def name
    #     @name
    # end 

    
    # def location
    #     # puts "Accessing location..."
    #     @location
    # end 

    # # SETTERS for instance variables

    # def name=(new_name)
    #     puts "DEBUG: changing name: #{@name} to #{new_name}"
    #     @name = new_name
    # end 

    # def location=(new_loc)
    #     @location = new_loc
    # end


    def hello
        puts "Hello, my name is #{@name} and I amd from #{@location}"
    end


    def goodbye
        puts "goodbye from me, a person!"
    end



end # person 



# Inheritance !
# Let's make a new, more specific type of Person
# calle a Comedian
# They will inherit all the behaviour (methods) and
# data of the "parent" 
# class (a.k.a. "superclass")
# But they might add some specific behaviour of their
# own, and they might "redefine" some of the
# inherited behaviour

# Parent is CLOSED FOR MODIFICATION, OPEN FOR EXTENSION

# "Comedian inherits from Person"
class Comedian < Person

    # All the Person methods and instance variables
    # are inherited (imported) here!


    def initialize(first_name)

        # Use the parent's version of initialize
        super first_name, 'London' # hard-code the location 

        # @first_name = first_name
        # @location = 'London'
        puts "Making a Comedian"
    end

    # Add a new method for Comedian objects,
    # that is not available for Person objects
    def tell_joke
        print "What's brown and stick?"
        5.times do
            print '.'
            sleep 0.2
        end
        puts 'A stick!'

    end # tell_joke


    # Redefine ("overide") a method that this class
    # has inherited from Person
    def hello

        # "Run the version of the current method"
        # that is defined in the parent class 
        super

        puts "Hello ladies and gentlemen, my name is #{@name} and I'll be your entertainment for the evening."
    end # hello


end # class Comedian



binding.pry