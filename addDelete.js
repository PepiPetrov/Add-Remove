function add() {
    const input = document.getElementById('input').value
    const ulElement = document.querySelector('ul')
    const liToAdd = document.createElement('li')
    liToAdd.textContent = input
    liToAdd.setAttribute('id',input)
    ulElement.appendChild(liToAdd)
    document.getElementById('result').textContent = `The item "${input}" is successfully added!`
    document.getElementById('input').value = ''
}
function deleteItem() {
    const input = document.getElementById('input').value
    const ul=document.getElementById('items')
    const li=document.getElementById(input)
    if(ul.contains(li)){
    ul.removeChild(li)
    document.getElementById('result').textContent = `The item "${input}" is successfully deleted!`
    }else{
        document.getElementById('result').textContent = `The item "${input}" does not exists!`
    }
    document.getElementById('input').value = ''
}
function removeAll() {
    const ul = document.querySelector('ul')
    ul.remove()
    document.createElement('ul')
    document.getElementById('result').textContent = `The items are successfully deleted!`
}