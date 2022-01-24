require 'sinatra'
require 'sinatra/reloader'
require_relative 'connection'


get '/' do
    @students = Student.all
    @subjects = Subject.all
    erb :index
end

get '/students/add' do
    @subjects = Subject.all
    erb :add_students
end


post '/students/add' do
    @students = Student.new(first_name: params[:first_name],second_name: params[:second_name],
                            course_year: params[:course_year],address: params[:address],
                            email: params[:email]);
    # Creating new entries trought associations
    params['subject'].each do |el|
        @subjects = Studentssubject.new(subject_id: el)  #Ask luke if we can do this without .each
        @students.studentssubjects << @subjects
        @students.save  
    end
    redirect '/'
end

get '/students/:id/edit' do
    @result = Studentssubject.where(subject_id: params[:id])
    @subjects = Subject.all
    erb :edit_students
end

get '/students/:id' do
    @result = Studentssubject.where(student_id: params[:id])
    @students = Student.where(id: params[:id]).first
    @subjects =  @result
    erb :students
end

post '/students/:id/update' do 
    student = Student.find params[:id]
    student.update(
    first_name: params[:first_name],
    second_name:  params[:second_name],
    course_year: params[:course_year],
    address: params[:address],
    email: params[:email])
    redirect '/'
end


get '/students/:id/delete' do 
    student = Student.destroy params[:id]
    redirect '/'
end


get '/subject/:id' do 
    @result = Studentssubject.where(subject_id: params[:id])
    @subjects = Subject.where(id: params[:id]).first
    erb :subjects
end
