let task = document.getElementById('task').value;
let submit = document.getElementById('submit');
let list = document.getElementById('list');

submit.addEventListener("click",addTask);

function addTask(){
    let task = document.getElementById('task').value;
  
    let entry = document.createElement('li');
    let cancel = document.createElement('button');
    let x = document.createTextNode('Remove');
    cancel.appendChild(x);
    entry.appendChild(document.createTextNode(task + " "));
    entry.appendChild(cancel)
    list.appendChild(entry)
    cancel.addEventListener('click',() => {removeTask(entry)});
   
}

function removeTask(t) {
    list.removeChild(t)
}
