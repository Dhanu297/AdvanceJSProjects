//constructor, inheritance, instance, methods, static , oops 
//Comstructor - a first method to called when the object is created. set the initial values of the object 

class Mammal 
{
    constructor(name,habitat)
    {
        this._name = name;
        this._habitat = habitat;
    }
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }
     get habitat()
    {
        return this._habitat;
    }
    set habitat(habitat)
    {
        this._habitat = habitat;
    }
    GiveBirth()
    {
        return ("<br/>Mammels dont lay eggs.")
    }
    static vertebre()
    {
         return("<br/>static : I have vertebre")
    }
}

class Human extends Mammal
{
    constructor(name,habitat, sharpBrain)
    {
        super(name,habitat);
        this._sharpBrain = sharpBrain;
    }

      get sharpBrain()
    {
        return this._sharpBrain;
    }
    set sharpBrain(val)
    {
        this._sharpBrain = sharpBrain;
    }

    UseBrain()
    {
        return ("<br/>Inside Human: I can do anything as I have sharp brain");
    }
    static education()
    {
        return ("<br/> Inside Human statc: I have education");
    }

}

let dog = new Mammal("dog","land");
document.getElementById("dvMammel").innerHTML = ("name is :"+dog.name + " Habbitat : " + dog.habitat) + 
dog.GiveBirth()+ Mammal.vertebre();


let human = new Human("dp","land","sharpBain");
document.getElementById("dvHuman").innerHTML = ("name is :"+human.name + " Habbitat : " + human.habitat+ " SharpBrain : " + human.sharpBrain) + 
human.GiveBirth() + Human.education()+ human.UseBrain();

//Oops 
//modularity and code reusability
// Encapsulation - hiding data  for e.g private variable use for data protection 
// inheritance
//polymorphism 
//abstraction - hiding complex data and implementation 