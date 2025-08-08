let item = document.querySelector('#item');
let toDoBox = document.querySelector('#to-do-box');

item.addEventListener(
    'keyup', 
    function(event){
        if(event.key == "Enter"){
            console.log(this.value);
            addToDo(this.value)
            this.value = ""
        }
    }
)
// for creating element

let addToDo = (item) => {
    const listitem = document.createElement('li');
    listitem.innerHTML = `
      ${item}
    <i class="fas fa-times"></i>  
    `
    // for line through
    listitem.addEventListener(
        'click',
        function(){
            this.classList.toggle("done")
        }
    )
    // for removing
    listitem.querySelector('i').addEventListener
    (
        'click', 
        function(){
            listitem.remove()
        }
    )
    toDoBox.appendChild(listitem)
}