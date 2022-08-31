//create object using object literals

const player = {};
player.name = 'small nirob'
player.specialty = 'batsman'
console.log(player)

const student = {

    name: 'Pandey',
    job:'Khai andey',
    ball:function(){
        console.log('throw the ball')
    },
    salary: 10000
}


//object constructor

const person = new Object()
console.log(person)

//object create method
const item = Object.create(null)
console.log(item)


//class
class person1{
    name= 'abul';
    adress = 'sodor ghat'
    constructor(age){
        this.age = age;
    }
}

const person2 = new person1(56)
console.log(person2)