const form = document.forms['add-todo']
let userInput = document.querySelector('input')
const body = document.querySelector('.container');
const trash = document.querySelector('.body .get');
const dark = document.querySelector('.dark')
const light= document.querySelector('.light')
const header = document.querySelector('.header')



form.addEventListener('submit',function(e){
    e.preventDefault();

    let value = form.querySelector('input[type="text"]').value;
    
    const todo = document.createElement('h3');
    const delBtn = document.createElement('img');
    delBtn.src = '/trash.png'
    const div = document.createElement('div')

    div.appendChild(todo);
    div.appendChild(delBtn);
    body.appendChild(div);

    todo.textContent = value;
    delBtn.textContent = delBtn

    delBtn.classList.add('get') 
    div.classList.add('body')

    userInput.value='';
    
  

})
    

body.addEventListener('click', (e)=>{
    const div = e.target.parentElement;
    if(e.target.className == 'get'){
        body.removeChild(div)
    }
})

dark.addEventListener('click', ()=>{
    body.classList.add('dark')
    header.classList.add('active')
})
light.addEventListener('click', ()=>{
    body.classList.remove('dark')
    header.classList.remove('active')
})