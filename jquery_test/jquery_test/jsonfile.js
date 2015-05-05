$(document).ready(function() {
    var data = [{
        "firstName": "Ashvini",
        "lastName": "Shinde",
        "RollNo": 1,
        "Subject": "JAVA"
    },
        {
            "firstName": "Bhavana",
            "lastName": "Deokar",
            "RollNo": 2,
            "Subject": "C"
        },
        {
            "firstName": "Swapnil",
            "lastName": "Khedekar",
            "RollNo": 3,
            "Subject": "C++"
        },
        {
            "firstName": "Rinku",
            "lastName": "Mishra",
            "RollNo": 4,
            "Subject": "VB"
        }
		];
		
    var tr;

    for (var i = 0; i < 10; i++) {
	
			
        tr = $('<tr>');
        tr.append("<td>" + data[i].firstName + "</td>");
        tr.append("<td>" + data[i].lastName + "</td>");
        tr.append("<td>" +data[i].RollNo + "</td>");	
        tr.append("<td>" + data[i].Subject + "</td>");
		tr.append("<td><input type='button' id='btnEdit' value='Edit' class='btnEdit'/><input type='button' id='btnDelete' value='Delete' class='btnDelete'/></td></tr>");
        $('table').append(tr);
        $(".btnEdit").bind("click", Edit);
        $(".btnDelete").bind("click", Delete);
		}
   
});
function Edit(){ 
	var par = $(this).parent().parent(); //tr
    var firstName = par.children("td:nth-child(1)");
    var lastName = par.children("td:nth-child(2)");
    var RollNo = par.children("td:nth-child(3)");
    //var Subject = par.children("td:nth-child(4)");
	var subject = par.children("td:nth-child(4)");
    var tdButtons = par.children("td:nth-child(5)");
    firstName.html("<input type='text' id='txtfirstName' value='"+firstName.val()+"'/>");
    lastName.html("<input type='text' id='txtPhone' value='"+lastName.val()+"'/>");
    RollNo.html("<input type='text' id='txtRoll' value='"+RollNo.val()+"'/>");
    Subject.html("<input type='text' id='txtmail' value='"+Subject.val()+"'/>");
    tdButtons.html("<input type='button' id='btnSave' value='Save' class='btnSave'/>");
    $(".btnSave").bind("click", Save);
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
}
function Delete(){
    var par = $(this).parent().parent(); //tr
    par.remove();
}

function Add(){
    $("#tblData tbody").append(
        "<tr>"+ "<td><input type='text'/></td>"+ "<td><input type='text'/></td>"+ "<td><input type='text'/></td>"+ "<td><input type='text'/></td>"+"<td><input id='btnSave' type='button' value='Save' class='btnSave'/><input type='button' id='btnDelete' value='Delete' class='btnDelete'/></td>"+ "</tr>");
    $(".btnSave").bind("click", Save);
    $(".btnDelete").bind("click", Delete);
}

function Save(){
    var par = $(this).parent().parent();//tr

    var firstName = par.children("td:nth-child(1)");
    var lastName = par.children("td:nth-child(2)");
    var RollNo = par.children("td:nth-child(3)");
    var Subject = par.children("td:nth-child(4)");
    var tdButtons = par.children("td:nth-child(5)");

    firstName.html(firstName.children("input[type=text]").val());
    lastName.html(lastName.children("input[type=text]").val());
    RollNo.html(RollNo.children("input[type=text]").val());
    Subject.html(Subject.children("input[type=text]").val());

    tdButtons.html("<input type='button' id='btnEdit' value='Edit' class='btnEdit'/><input type='button' id='btnDelete' value='Delete' class='btnDelete'/>");
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);

}

