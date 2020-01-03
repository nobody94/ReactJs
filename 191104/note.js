- prototype: kế thừa object prototype (sử dụng đc ở tất cả các file js mà ko phải viết lại function)
    + VD:
    var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    Person.prototype.calculateAge  = function() {
        console.log(2016 - this.yearOfBirth);
    };
    Person.prototype.lastName = 'Smith';
    var john = new Person('John', 1990, 'teacher');
    var jane = new Person('Jane', 1969, 'designer');
    var mark = new Person('Mark', 1948, 'retired');
    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();
    => john,jane,mark kế thừa của object prototype calculateAge
    console.log(john.lastName);//Smith
    console.log(jane.lastName);//Smith
    console.log(mark.lastName);//Smith
    => john,jane,mark kế thừa của object prototype lastName

    + Practice
    var character = function(name,age,cast) {
        this.name = name;
        this.age = age;
        this.cast = cast;
    }
    character.prototype.calculateYear = function(){
        console.log(2019 - this.age);
    }
    character.prototype.job = "Actor";
    var sabrina = new character('Sabrina',27,'sabrina spellman');
    var prudence = new character('Prudence',25,'prudence blackwood');
    console.log(sabrina.job);
    console.log(prudence.job);
    sabrina.calculateYear();
    prudence.calculateYear();

- Object.create : tạo object mới kế thừa thuộc tính object cũ 
và khi object mới thay đổi thì ko ảnh hưởng gì đến thuộc tính của object cũ
    + VD
    var personProto = {
        calculateAge: function() {
            console.log(2016 - this.yearOfBirth);
        }
    };
    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'teacher';
    var jane = Object.create(personProto, {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });
    + Practice
    var a = 3;
    var b = Object.create(a);
    b = 5;
    console.log(a);
    console.log(b);

- Object.assign : copy giá trị các thuộc tính của các object cũ 
và ghi đè thuộc tính khi đã có thuộc tính đó trong các object

    + Practice
    var a = {
        name :'Lucas',
        age:12,
    }
    var b = {
        lastName : "Joyce",
        age:23,
    }
    var c = Object.assign(a,b);
    console.log(c);

- Object 
    + VD:
    var ob1 = {
        name: 'Mike',
        age: 24
    };
    var ob2 = ob1;//ko nên gán object như này vì ob2 và ob1 đều trỏ về thuộc tính của ob1 
    ob1.age = 27;
    console.log(ob1.age);//27
    console.log(ob2.age);//27 

    + Hay dùng : 
        * {...object}: clone object ra 1 object mới
        * Object.assign

- Map: áp dụng cho array , duyệt từng phần tử của array  
    + VD:
    var array1 = [2,14,25,4];
    const map1 = array1.map(x => x + 2);
    // (x => x + 2) = function(x){ return x + 2; }
    console.log(map1);
- Arrow function:
const num = [34,65,12,20];
let num2 = num.map(el => 2019 - el);
console.log(num2);

- This

this = global = window;
const self = this
function a{param1}{
    console.log(this);
    //this này ở trg function
    console,log(self);//this global
}
const a = () => {
    console.log(this);
    // đây là this của global
}
this.a = this.a.bind(this);
//đây là this của global

- Destructuring
const obj = {
    name: "John",
    age:23
}
const{name,age} = obj;
console.log(name,age);
const{name:a,age:b} = obj;
console.log(a,b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);//=> age 
console.log(retirement);// => 65 - age

- Scoping
var a = 1;
first();
function first(){
    var b = 2;
    second();
    function second(){
        var c = 3;
        console.log(a,b,c);
        third();
    }
}
function third() {
    var d = 4;
    console.log(a,d);
}
//Thứ tự đọc của js sẽ đọc từ dưới lên 
//(đọc thằng cần xử lý đầu tiên sau đó bóc tách từng thành phần rồi lấy ra các giá trị thực hiện hành động)
