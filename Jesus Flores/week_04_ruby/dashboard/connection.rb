require 'active_record'

#Set up the ActiveRecord 'Connection' to our DB
ActiveRecord::Base. establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

#Show us all the SQL you're saving us from writing!
ActiveRecord::Base.logger = Logger.new STDOUT

#Close Connection after every request
after do
     ActiveRecord::Base.connection.close 
end

class Studentssubject < ActiveRecord::Base
    belongs_to :subject
    belongs_to :student
end

class  Student <  ActiveRecord::Base
    has_many :studentssubjects
    has_many :subjects, through: :studentssubjects
end

class  Subject <  ActiveRecord::Base
    has_many :studentssubjects
    has_many :students, through: :studentssubjects
end
