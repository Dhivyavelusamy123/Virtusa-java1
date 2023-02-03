// //var message:string="Hello world"
// //console.log(message);


// // class Father{
// //     ac():void{
// //         console.log("temperature is high");
// //     }
// // }
// // class Son extends Father{
// //     fan():void{
// //         console.log("3 fans");
// //     }

// // }
// // var a=new Son();
// // a.ac();



// // var a:string="dhivya";
// // var b:number=10;
// // var c:number=15;
// // var d=b+c;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);


// // var Name:string="ABC";

// // 


// // var a:number=2;
// // var a1:number=3;
// // var c=a+a1;
// // console.log(c);



// console.log("Number in details");
// console.log("Max:"+Number.MAX_VALUE);
// console.log("Min:"+Number.MIN_VALUE);
// console.log("-inf:"+Number.NEGATIVE_INFINITY);
// console.log("-inf:"+Number.POSITIVE_INFINITY);

// var month=0
// if(month<=0 || month>12 ){
//     month=Number.NaN;
//     console.log("Month is"+ month);
// }
// else{
//     console.log("value done");

// }





var a:number[];
a=[1,2,3,5,6];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

var a1:string[];
a1=["1","2","3","4"];
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[3]);



var b:number[]=new Array(4)
for(var i=0;i<b.length;i++)
{
    b[i]=i*2;
    console.log(b[i]);
}


var c:string[]=new Array("a","b","cc")
for(var i=0;i<c.length;i++)
{
    b[i]=i*2;
    console.log(c[i]);
}



var tup=[1,"dhivya",5,];
var tup1=[120];
var tup2="123";
console.log(tup1[0]);

var mytuple = [10, 'hello', "world", "typescript"]; //4
console.log("Items before push " + mytuple.length); //4
mytuple.push(12); //append value
console.log(mytuple);
console.log("Item after push" + mytuple.length); //5
console.log("Item after pop" + mytuple.length); //4
console.log(mytuple.pop() + " popped from the tuple");
console.log("Items after pop " + mytuple.length); //4
console.log(mytuple);
mytuple[2] = "MKCE";
console.log(mytuple);




var val:string|number
val=12
console.log("numeric vlaue of val"+val)
val="This a string"
console.log("string value of val"+val)




function disp(name:string|string[]){
    if(typeof name == "string")
    {
        console.log(name)
    }
    else{
        var i;
    }
    for(i = 0;i<name.length;i++)
    {
        console.log(name[i])
    }
}
disp("mark")
console.log("printing names array.....")
disp(["mark","tom","dhivya","charu"])


interface Abc{
    //variables
    //methods
    firstname:string
    secondname:string
    sayHi:()=>string

}
var hello:Abc={
    firstname:"tom",
    secondname:"hanks",
    sayHi:():string=>{return "Hi there"}

}
console.log("customer object")

console.log(hello.firstname)
console.log(hello.secondname)
console.log(hello.sayHi())

// class Student{
//     //variables
//     //constructors
//      Name:string;
//      id:number;
//      dept:string; 
// }
// class Staff extends Student {
//     tom(Name:string,id:number,dept:string){
//     console.log(Name+"dhivya");
//     console.log(id+25);
//     console.log(dept+"cse");
//     }
// }
// var obj=new Staff();









