export class Student{

    firstName : String;
    lastName : String;

    constructor(fName :String, lName:String){

            this.firstName = fName;
            this.lastName = lName;

    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    setFirstName(fn : String){
        this.firstName = fn;


    }

    setLastName(ln: String){
        this.lastName = ln;
    }

    logFistName(){
        console.log(this.firstName);
    }
    logLastName(){
        console.log(this.lastName);
    }

}