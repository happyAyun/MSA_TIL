const projects = [ 
    {pno:"p001", pname:"전자인사관리시스템", pdesc:"기업 내 인사정보를 관리하는 시스템"},
    {pno:"p002", pname:"도서관리시스템", pdesc:"기업 내 자기개발을 위한 도서대여 시스템"},
    {pno:"p003", pname:"IaaS 서비스", pdesc:"Infa as a Service 시스템"},
    {pno:"p004", pname:"Paas 서비스", pdesc:"Platform as a Service"},
    {pno:"p005", pname:"SaaS 서비스", pdesc:"Soft as a Service"}  ];

function selectItem(){
    for(i=0;i<projects.length;i++){
        if(document.list.project[i].checked){
            document.p1.pno.value = projects[i].pno;
            document.p1.pname.value = projects[i].pname;
            document.p1.pdesc.value = projects[i].pdesc;
            break;
        }
    }
}

function displayData(){
    // display="";
    // projects.forEach(project=>{
    //     display+=`
    //         <tr>
    //         <td><input type='radio' onclick='selectItem()'/></td>
    //         <td>${project.pname}</td>
    //         </tr>
    //     `
    // });
    // document.getElementById("aaa").innerHTML = display;
    for(i=0;i<projects.length;i++){
        document.write("<tr>");
        document.write("<td><input type='radio' name='project' onclick='selectItem()'/></td>");
        document.write("<td>"+ projects[i].pname +"</td>")
        document.write("</tr>");
    }
}
