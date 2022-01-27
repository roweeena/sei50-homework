class StudentsController <  ApplicationController


    def index
        @result = Student.all
    end

    def get_student
        @result = Student.find params[:id]
    end

    def edit
        @result = Student.find params[:id]
    end

    def update
        student = Student.find params[:id]
        student.update(
            name: params[:student][:name],
            email: params[:student][:email],
            phone_number: params[:student][:phone_number],
            address: params[:student][:address],
            year: params[:student][:year]
        )
        redirect_to student_path(params[:id])
    end   
    
    def create
        @student = Student.create(
            name: params[:name],
            email: params[:email],
            phone_number: params[:phone_number],
            address: params[:address],
            year: params[:year]
        )
        redirect_to students_path
    end       

    def delete 
        result = Student.destroy params[:id]
        redirect_to students_path
    end
end