# # Robot Factory 🤖
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
# Names typically take the format of things like "BX777" or "SD234".
# For instance:
# ```rb
# robot1 = Robot.new
# puts robot1.name
# => "BX777"
# robot2 = Robot.new
# puts robot2.name
# => "SD234"
# puts robot2.name
# => "SD234"
# ```
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
# if I say:
# ```rb
# robot3 = Robot.new
# puts robot3.name
# => "RF629"
# robot3.reset
# puts robot3.name
# => "ZC532"
# ```
# ## Extensions 🧯
# ### Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
# For every action our robot takes, we should keep track of it.
# ```rb
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
# => 5
# ```
# ### Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
# ```rb
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
# ```


require 'pry'
class Robot

  attr_reader :instruction_count, :reset_at, :created_at #gives you a getter for free

  # attr_accessor :name #gives you a setter and a getter for free
  #
  # def name=(val)
  #   @name = val
  # end

  def initialize #sets the initial valus for our object
    @name = generate_name
    @instruction_count = 0
    @created_at = Time.now
    @reset_at = Time.now
  end

  def generate_name
    letters = ("AA".."ZZ").to_a.sample
    digits = ("000".."999").to_a.sample
    letters + digits #implicit return
  end

  def name
    puts "My name is #{@name}"
  end

  def reset
    @instruction_count += 1
    @name = generate_name
    @reset_at = Time.now
  end


  def timers
    time_since_last_reset = Time.now - @reset_at
    time_since_creation = Time.now - @created_at

    message = "#{time_since_last_reset} seconds since last boot, #{time_since_creation} seconds since creation"
  end


end

binding.pry
