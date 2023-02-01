function getTag(obj){
const {key,type,id} = obj;
let input=null;
switch(type){
  case NUMBER:
  case TEXT:
  case DATE:
  
    input =  document.createElement("input");
    input.type=type;
    input.id=id;
    input.name=key;
    break;
  case BOOLEAN:
            input = document.createElement("select");
            input.name = key;
            input.id = id;
          
   

    default:
    input =  document.createElement("input");
    input.type=TEXT;
    input.id=id;
    input.name=key;

    
}

    const inputDiv = document.createElement("div");
    const inputLabel= document.createElement("label");
    inputLabel.setAttribute("for",id);
    inputLabel.innerHTML=key;
    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(input);
    return inputDiv;

}