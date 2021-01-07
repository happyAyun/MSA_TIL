const projects = [ 
    {pno:"p001", pname:"전자인사관리시스템", pdesc:"기업 내 인사정보를 관리하는 시스템"},
    {pno:"p002", pname:"도서관리시스템", pdesc:"기업 내 자기개발을 위한 도서대여 시스템"},
    {pno:"p003", pname:"IaaS 서비스", pdesc:"Infa as a Service 시스템"},
    {pno:"p004", pname:"Paas 서비스", pdesc:"Platform as a Service"},
    {pno:"p005", pname:"SaaS 서비스", pdesc:"Soft as a Service"}  ];

function myFunction(this){
    // for(i=0;i<projects.length;i++){
    //     if(document.p1.)
    // }
    document.getElementById("p1").innerHTML = "Hello World";

    // document.p1.pno.value=projects[this].pno;
    // document.p1.pname.value=projects[this].pname;
    // document.p1.pdesc.value=projects[this].pdesc;
}
function displayData(){
    for(i=0;i<projects.length;i++){
        document.write()
    }
}
<p onchecked="choFunc(event)"></p>