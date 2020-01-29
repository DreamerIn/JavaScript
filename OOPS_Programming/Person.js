class Person{
    //Setter method for the property name 
    set name(newName){
        if(newName.length < 3){
            this._name = 'Name Error: Length must be at least 3 characters';
        } else {
            this._name = newName;
        }
    }

    //getter method for the property name
    get name(){
        if(this._name === ""){
            return 'Name Error: The name was never set';
        }else {
            return this._name;
        }
        
    }

    set age(newAge){
        if(newAge >= 1 && newAge <= 123){
            this._age = newAge;
        } else {
            this._age = -999; 
        }
        
    }

    get age(){
        return this._age;
    }
    
    //Contructor for the class
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    showPersonInformation(){
        let info = 'Name: ' + this._name + '\n' + 'Age: ' + this._age;
        return info;
    }

    increaseAgeBy(amount){
        this._age = parseInt(this._age) + parseInt(amount);
        return this._age;
    }
}

let person = new Person();

person.name = "Uncle Bob";
person.age = "45";
console.log("perosn object ", person);
console.log("Person Information ", person.showPersonInformation());
console.log("Person Age ", person.increaseAgeBy(65));
