let student1 = {
    name : 'sanjeev',
    age : 21,
    branch : 'b.tech cse '
}
let student = {
    name : 'sanju',
    age : 21,
    branch : 'b.tech cse ',

    detail : function()
    {
        console.log ("hi student")
        console.log(this);
        
    }
}
student.detail();
