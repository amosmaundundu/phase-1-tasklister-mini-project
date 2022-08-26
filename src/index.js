document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// variales
const form =document.querySelector('form');


//creating a list

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText = e.target.querySelector('#new-task-description').value;

    const ul= e.target.parentNode.querySelector('#tasks');
    const btn =document.createElement('button');
    const li =document.createElement('li')

    btn.innerText ='X'
    li.innerText = `${inputText} `;
    li.appendChild( btn);
    ul.append(li);

    form.reset();

    //removing items on list
        btn.addEventListener('click',(e)=>{
          e.target.parentNode.remove();
        });
  });