document.addEventListener('DOMContentLoaded', function(){
  makeSubmitWork();
})

function makeSubmitWork(){
  document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()

    const newTask = document.createElement('li')
    const deleteBtn = document.createElement('button')
    const colorSelector = document.createElement('select')
    const options = document.createElement('optgroup')
    const red = document.createElement('option')
    const blue = document.createElement('option')
    const green = document.createElement('option')
    red.label = "High Priority"
    blue.label = "Medium Priority"
    green.label = "Low Priority"
    red.value = "red"
    blue.value = "blue"
    green.value = "green"
    
    options.appendChild(red)
    options.appendChild(blue)
    options.appendChild(green)
    colorSelector.appendChild(options)
    colorSelector.onchange = ()=>{
      newTask.style.color = colorSelector.options[ colorSelector.selectedIndex ].value
    }
    deleteBtn.textContent = ' x '
    const x = document.getElementById('new-task-description').value
    newTask.textContent =`${x} `
    deleteBtn.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
    })
    newTask.appendChild(deleteBtn)
    newTask.appendChild(colorSelector)
    document.getElementById('tasks').appendChild(newTask)

  })
}
