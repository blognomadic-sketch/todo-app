const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


function load(){
const tasks = JSON.parse(localStorage.getItem('tasks')||'[]');
list.innerHTML='';
tasks.forEach((t,i)=>{
const li = document.createElement('li');
li.textContent = t;
const btn = document.createElement('button');
btn.textContent='✖';
btn.onclick = ()=>{ remove(i); };
li.appendChild(btn);
list.appendChild(li);
})
}


function save(tasks){ localStorage.setItem('tasks', JSON.stringify(tasks)); }


function add(task){
const tasks = JSON.parse(localStorage.getItem('tasks')||'[]');
tasks.push(task);
save(tasks);
load();
}


function remove(index){
const tasks = JSON.parse(localStorage.getItem('tasks')||'[]');
tasks.splice(index,1);
save(tasks);
load();
}


form.addEventListener('submit', e => { e.preventDefault(); if(input.value.trim()) add(input.value.trim()); input.value=''; });
window.addEventListener('DOMContentLoaded', load);
