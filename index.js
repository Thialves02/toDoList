let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let deleteAll = document.getElementById('deleteAll');
let nmr = 0;


addToDoButton.addEventListener('click',function(){
    if(inputField.value===""){
        swal("Please enter a task!", "", "error");
        return;
    }
    
    if(nmr>2){
        swal("Finish your tasks before add other tasks!", "", "error");
        inputField.value = ""; 
        return;
    }
    else{
    nmr++;
    let paragraph = document.createElement('p');
    var btn = document.createElement('BUTTON');
    var lbl = document.createTextNode("DELETE");
    var btn2 = document.createElement('BUTTON');
    var lbl2 = document.createTextNode("DONE");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(btn);
    toDoContainer.appendChild(btn2);
    btn.appendChild(lbl);
    btn2.appendChild(lbl2);
    inputField.value = ""; 
    qntd.textContent = nmr;
    
    btn.onclick = function()
    {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(btn);
        toDoContainer.removeChild(btn2); 
        qntd.textContent = (nmr = nmr -1);
    }
    
    btn2.onclick = function(){
        paragraph.style.textDecoration = "line-through";
    }
    btn2.ondblclick = function(){
        paragraph.style.textDecoration = "none";     
    }
    deleteAll.addEventListener('click',function(){
        toDoContainer.innerText = "";
        qntd.textContent = (nmr=0);
    })
    
    
}
})




