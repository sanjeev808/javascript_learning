
/* simple array  declear*/
var marks= ["10 ", "20", "95","65"];
document.write(marks);
document.write("<br>")
document.write("<br>")
/* array concatinaion*/

document.write("Array concatination");
document.write("concat(");
document.write("<br>");
let arr=["ram" , "sham" , "sanju" , "aditi"];
let arr1=["shivanshu" , "ajeet" , "sanjeev" , "lokeh"];
document.write(arr.concat(arr1));
document.write("<br>");
document.write("<br>");
/*copyWithIn*/
document.write("CopyWithin()");
document.write("<br>");
var marks = ['69','89' , '95' ,'45','34' , '76' ,'56','100'];
document.write(marks.copyWithin(1,4,8));
document.write("<br>");
document.write("<br>");
  /*entries*/
    document.write("entries()")
    document.write("<br>")
  arr2 = [1,2,3,4,5,6]
var result=  arr2.entries();
for(let value of result)
{
    document.write("<br>")
    document.write(value)
}
document.write("<br>");
document.write("<br>");
 /*every*/
 document.write("every()")
    document.write("<br>")
    let age =  [ 33,17  , 23, 56]
    let approve = age.every(ispass);
    function ispass(candidate)
    {
        return candidate>18;
       }
document.write(approve);
document.write("<br>");
document.write("<br>");
/*fill()*/
document.write("fill()")
    document.write("<br>")
     age1 =  [ 33,17 , 23, 56,52]
    age1.fill(100)
    document.write(age1);
    document.write("<br>")
    document.write("<br>")
        /*filter*/
 document.write("filter()")
    document.write("<br>")
    const age2 =  [ 33,9 , 23, 56]
    const approve2 = age2.filter(ispass);
    function ispass(candidate)
    {
        return candidate>18;
       }
document.write(approve2);
document.write("<br>");
document.write("<br>");
/*find*/
 document.write("find()")
    document.write("<br>")
    const age3 =  [ 19 , 23, 56];
    const approve3 = age3.find(ispass);
    function ispass(candidate)
    {
        return candidate>18;
       }
document.write(approve3);
document.write("<br>");
document.write("<br>");
/*findIndex*/
document.write("findIndex()")
    document.write("<br>")
    var age4 =  [ 3,15 , 23, 56]
    const approve4 = age4.findIndex(ispass);
    function ispass(candidate)
    {
        return candidate>18;
       }
document.write(approve4);
document.write("<br>");
document.write("<br>");
/*forEach*/
document.write("forEach()")
    document.write("<br>")
    var a = ["sanjeev","sanju", "ishu "];
     var b = a.forEach(loop , "<br>")
     function loop(value , index){
         document.write(index+ ":&nbsp" +value + "<br>&nbsp;")      
     };
     /*from*/
     document.write("from()")
    document.write("<br>")
    var alphabet = ['abcdef'];
    var alphabet1 = Array.from(alphabet);
    document.write(alphabet1);

  /*  splice();*/
var names = [ ' sanju' ,' sid ','aditi' , 'avni' , 'sloka'];
document.write(names);
document.write("<br>");
names.splice(1,3,'sanjeev','aaru');
document.write(names)

/*push*/
let name = [];
name.push('sanju', 'harry')
document.write(name);
