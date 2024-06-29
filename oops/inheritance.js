class Parent{
    m1(){
        console.log("inside parent class method.");
    }
}

class Child extends Parent{

    m2(){
        console.log("inside child class method");   //we use keyword extends to inherit a parent class.(like java)
    }
}

var ch=new Child()
ch.m2()
ch.m1()


//multiple inheritance is not possible in javascript.(Child acquiring properties from two classes.)