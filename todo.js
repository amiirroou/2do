var types=[]
var times=[]
var titles=[]
var tasklist=[]
var contenuHTML = ""

function addtask(){
    var typeval = document.getElementById('typeid').value,
    timerval = document.getElementById('timerid').value,
    titleval = document.getElementById('tilteid').value;
    types.push(typeval)
    times.push(timerval)
    titles.push(titleval)
console.log(times)

for (let i = 0; i < times.length; i++) {

    var task = {
      type: types[i],
      time: times[i],
      title: titles[i],      
    }


tasklist.push(task)
console.log(tasklist)
contenuHTML += `
<div class="card bg-light mb-3" >
            <div class="card-header">${task.type}</div>
            <div class="card-body">
              <p class="card-text">${task.time}</p>
               <h5 class="card-title">${task.title}</h5>
            </div>
          </div>
`

}
const productDiv = document.getElementById('cardid')
productDiv.innerHTML = contenuHTML
}
