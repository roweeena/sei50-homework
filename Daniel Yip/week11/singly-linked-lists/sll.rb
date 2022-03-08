require 'pry'

# THOUGHT EXPERIMENT:

# WHAT IF you didn't have arrays in a language?

# ... use a Ruby 'mixin' to give 'map', 'reduce' etc for free as long as we define an 'each' method



class SLL 
  # Bonus: research 'mixins' in ruby and how you can use the 'Enumerable' mixin to get FOR FREE methods like map, reduce, select/filter once ... as long as you have defined a working 'each'
  include Enumerable

  attr_accessor :head # keep track of the first node in the list; fromthis we can advance via '.next' to all the following nodes


  def initialize(val)
    # Create an instance of the Node class, and forward on the 'val' argument given to this SLL construtor as the data of this new node. the returned Node is stored as the @head of this SLL object.

    @head = Node.new val
    @count = 1
  end

  #  This method will create a new node, assign 'val' as it sdata and make that new node the new @head of the list.
  def prepend(val)
    new_node = Node.new val
    new_node.next = @head
    @head = new_node
    @count += 1
  end

  
  def to_s
    output = ''
    node = @head
    while node != nil
      output += node.data + ', '
      node = node.next
    end
    output
  end


  def append(val)
    
    new_node = Node.new val
    node = @head

    while node.next != nil
      node = node.next
    end
    @count += 1
    node.next = new_node

  end

  def middle(new_val, after_val)
    new_node = Node.new new_val

    node = @head
    after_node = nil

    while node.data != after_val
      node = node.next
    end 

    after_node = node.next
    
    new_node.next = after_node
    @count += 1
    node.next = new_node

  end
  
  def insert_after(node, val)
    new_node = Node.new val
    
    new_node.next = node.next
    @count += 1
    node.next = new_node

  end

  def find(needle)
    node = @head
    while node != nil
      if node.data == needle
        return node
      end
      node = node.next
    end
  end


  def slow_length #returns the total length
    length = 0
    node = @head
    while node !=nil
      length +=1
      node = node.next
    end 
    length
  end

  def length
    @count
  end


  
  def [](n)  # random access list[n]
    index = n
    node = @head

    return nil unless n < self.length
    
    while index != 0
      node = node.next
      index -= 1
    end

    node

  end



  def reverse # returns a reversed verion of the list, do not change the original
    reversedList = SLL.new @head.data

    node = @head.next
    while node != nil
      reversedList.prepend(node.data)
      node = node.next
    end
    
    reversedList

  end

  def reverse! # destructive version TODO: make this work :(
    
    prev_node = nil
    node = @head
    next_node = @head.next
    
    while next_node != nil
      node.next = prev_node
      prev_node = node
      node = next_node
      next_node = node.next
    end
    
    @head = node
    
  end

  def shift # remove and return the first item from the list and return it
    shifted = @head
    @head  = @head.next
    shifted
  end

  def delete(n) # remove the specified node from the list, i.e. a kind of splice
    prev_node = nil
    node = @head

    while node != n
      prev_node = node
      node = node.next
    end

    if node == @head
      @head = node.next
      return
    end

    prev_node.next = node.next

  end
# implement the each method as it exists in ruby, version of each must take a block and run that block for each node in the list, providing the block with a block variable which will be the current node as it loops - look into 'yield' and 'block_given?'
  def each 
    node = @head
    while node != nil
      yield(node)
      node = node.next
    end
    self
  end

  def map # as above but applies the block to each node and returns an array of transformed values
    arr = []

    node = @head
    while node != nil
      arr.push(yield(node))
      node = node.next
    end

    arr

  end

  

  # class Node

    
  #   attr_accessor :data, :next
    
  #   def initialize(val)
  #     @data = val
  #   end
    
  # end # Node
  
  Node = Struct.new('Node', :data, :next)



end # SLL

list = SLL.new 'Morty'
list.prepend 'Rick'
list.append 'Summer'
binding.pry