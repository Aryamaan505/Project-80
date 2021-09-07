nameArray=[];

function submit(){
    var display_student_name=[];
    for(var j=1;j<=4;j++)
    {
        var student=documen.getElementById("name_of_the_student"+j).value;
        console.log(student);
        nameArray.push(student);

    }
    console.log(nameArray);
    var length=nameArray.length;
    console.log(length);
    for(var i=0;i<length;i++){
        display_student_name.push("<h4>NAME-"+nameArray[i]+"</h4>");
        console.log(display_student_name);
        
    }
    console.log(display_student_name);
    document.getElementById("display_name").innerHTML=display_student_name;

    var remove=display_student_name.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    

}