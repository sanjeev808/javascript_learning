const getRollNo = () =>{
    setTimeout( () => {
        console.log('API getting roll no.');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);
 
        setTimeout((rollno) => {
            const biodata = {
                name : 'vinod',
                age : 21    
            }
            console.log(` My Roll no. is ${rollno}.my name is ${biodata.name} and I am ${biodata.age} years old`);
            setTimeout( () => {
                    biodata.gender= 'male';
                    console.log(` My Roll no. is ${rollno}.my name is ${biodata.name} and I am ${biodata.age} years old. i am an alpha ${biodata.gender}`);
            } , 2000 , biodata.name);
        } ,2000,roll_no[1])
    },2000)
}
getRollNo();