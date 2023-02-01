function createTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    for (let {key} of inputObjectArr){
        const th = document.createElement("th");
        th.textContent = key;
        thead.appendChild(th);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}

function addDataToTable(){
    const userinputdata = getDataToTable();
    console.log(userinputdata);
    if (userinputdata.length != inputObjectArr .length){
        alert("please fill all the required inputs");
    }else{
        const tableBody = document.querySelector("#tableContainer table tbody");
        const tr = document.createElement("tr");
        for (let data of userinputdata){
            const td = document.createElement("td");
            td.innerText =data;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function getDataToTable(){
    const data = [];
    for (let {id} of inputObjectArr){
        const tag = document.getElementById(`${id}`);
        if(tag.value){
                data.push(tag.value);
                tag.value = '';
        }
    }
     return data;
}


