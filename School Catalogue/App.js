class School
{
  constructor(name,level,numOfStudents)
  {
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  }
  get name()
  {
    return this._name;
  }
  get level()
  {
    return this._level;
  }
  get numOfStudents()
  {
    return this._numOfStudents;
  }
  set numOfStudents(val)
  {
    if (typeof val === 'Number') 
    {
      this._numOfStudents= val;
    }
    else
    {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts()
  {
      console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substitutes)
  {
      const randomIndex = Math.floor(substitutes.length * Math.random());
      return substitutes[randomIndex];
  }
}
class Primary extends School
{ 
  constructor(name,numOfStudents,pickupPolicy)
  {
    super(name,'Primary',numOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy()
  {
     return this._pickupPolicy;
  }

}
class Middle extends School
{
    constructor(name,numOfStudents)
    {
      super(name,'Middle',numOfStudents);      
    }  
}
class High extends School
{
    constructor(name,numOfStudents,sportsTeam)
    {
      super(name,'High',numOfStudents);
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam()
    {
      return this._sportsTeam;
    }
}
const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log("Today substitute will be "+ School.pickSubstituteTeacher(substituteTeachers));

const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();

console.log("Today substitute will be "+ School.pickSubstituteTeacher(substituteTeachers));
console.log("Sports team "+ alSmith.sportsTeam);
