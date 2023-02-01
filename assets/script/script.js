const inputTagArray = inputObjectArr.map(element => getTag(element));
console.log(inputTagArray);
console.log("hello");


const inputContainer = document.getElementById("inputContainer");

inputTagArray.forEach((inputTag) => {
    inputContainer.append(inputTag);
})

const btn = document.createElement("button");
btn.id = "inputBtn";
btn.class = "btn btn-primary";
btn.innerText = "save";

inputContainer.appendChild(btn);

const tableContainerdiv = document.getElementById("tableContainer");
const table = createTable();
tableContainerdiv.appendChild(table);


btn.addEventListener("click", addDataToTable);


