let userName = prompt("Please type your name:");
let userRole = prompt("Enter your designation (HOD / Faculty / Student):");
console.log("User Name ->", userName);
console.log("User Role ->", userRole);


let patentType = prompt("Enter the patent category (granted / published):");
let internationalStatus = prompt("Is the patent international? (true/false):");

let score = 0; 
if (patentType === "published") {
    score = 10;
} else if (patentType === "granted") {
    score = 20;
}
if (internationalStatus === "true") {
    score += 5;
}
console.log("Final Marks:", score);

let filelist=["Abc","Ds","SVG","sas"]
for (let i=0;i<filelist.length;i++){
    console.log(filelist[i])
}


const patentCategory = prompt("Enter patent type (granted/published):");
const international = prompt("Is it an international patent? (y/n):");

function getMarks(type, status) {
    let totalMarks = 0;
    if (type === "granted") {
        totalMarks = 20;
    } else if (type === "published") {
        totalMarks = 10;
    }
    if (status === "y") {
        totalMarks += 5;
    }

    return totalMarks;
}
let result = getMarks(patentCategory, international);
console.log("Total Marks:", result);



const faculty = [{
    name: "Akshra",
    department: "CSE",
    numberOfPatents: 23
},
{
    name: "Satveer",
    department: "CSE",
    numberOfPatents: 12
}];
console.log(faculty );



let fileName = "assignment_submission.pdf";
const file = fileName.toLowerCase
if (file.endsWith(".pdf")) {
    console.log("Valid PDF");
} else {
    console.log("Invalid file");
}



let status = "Approved by Head of the Department"; 

switch (status) {
    case "Draft":
        console.log("Next status: Submitted");
        break;
    case "Submitted":
        console.log("Next status: Approved by Head of the Department");
        break;
    case "Approved by head of the Department":
        console.log("Workflow Complete: you'have reached at the final stage.");
        break;
    default:
        console.log("status not recognized");
}
