class Student{
    constructor(enroll,name){
        this.enroll=enroll;
        this.name=name;
    }

    studentDisplay(){
        console.log(this.enroll);
        console.log(this.name);
    }
}

let stud1=new Student(1,"Harmik");
stud1.studentDisplay();