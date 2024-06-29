class Student{

    setStudent(name,course,degree){
        this.name=name

        this.course=course

        this.degree=degree
    }

    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

var obj = new Student()

obj.setStudent("balu","python","btech")
obj.printStudent()


//in javascript we call constructor to initialize instance variable , in python we used __init__() 