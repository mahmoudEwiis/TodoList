let userworksInp = document.getElementById("userworksInp");
let tasks;
if(localStorage.getItem("mytask") == null)
{
    tasks = [];
}
else{
    tasks = JSON.parse(localStorage.getItem("mytask"));
    display();
}
let addBtn = document.getElementById("addBtn");
/* add to local storage*/
addBtn.addEventListener("click",function(){
    let task = userworksInp.value;
    tasks.push(task)
    localStorage.setItem("mytask",JSON.stringify(tasks))
    userworksInp.value="";
    display();
})
/* show in table */
function display(){
    let temp =``;
    for(let i=0;i<tasks.length;i++)
    {
        temp +=` 
        <td class="content"><i  class="far fa-check-circle checkmark"></i>${tasks[i]}</td>
        <td class="remove" onclick = remove(${i}) ><i class="far fa-trash-alt"></i></td>
        <td class="edit" onclick = edit(${i}) ><i class="far fa-edit"></i></td>
        <td class="Done"><input onchange = check(this,${i}) type="checkbox" name="Userword" class="Userword" value="Done"> <p class="doneword">Done!</p>
        </td>
        </tr>
        `
    }
    document.getElementById("mylist").innerHTML = temp;
}
 /* remove task */
function remove(index){
    tasks.splice(index , 1)
    localStorage.setItem("mytask",JSON.stringify(tasks))
    display();
}
 /* show layer  && edit task*/
let ChangeBtn = document.getElementById("ChangeBtn")
let layer = document.getElementById("layer");
let edituserworksInp = document.getElementById("edituserworksInp")
function edit(index){
    layer.style.display = "block"
   edituserworksInp.value = tasks[index]
   ChangeBtn.setAttribute("onclick","change("+index+")")
}
function change(index){
    tasks[index] = edituserworksInp.value;
    localStorage.setItem("mytask",JSON.stringify(tasks))
    display();
    layer.style.display = "none";
}
/* hide layer */
let CancelBtn = document.getElementById("CancelBtn")
CancelBtn.addEventListener("click",function(){
    layer.style.display = "none"
})

function check(checkboxElem,index){
    let content = Array.from(document.getElementsByClassName("content"));
    let Done = Array.from(document.getElementsByClassName("Done"));
    let checkmark =document.getElementsByClassName("checkmark");
    let doneword =document.getElementsByClassName("doneword");
    if(checkboxElem.checked )
    {
        checkmark[index].style.display = "inline-block";
        content[index].style.textDecoration="line-through";
        doneword[index].style.display = "inline-block";
    }
    else
    {
        checkmark[index].style.display = "none";
        content[index].style.textDecoration="none";
        doneword[index].style.display = "none";

    }
}
let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click",function(){
    window.location.href="index.html"
})
