/*let data = new New;*/
let data = [{
    id: 1,
    title: "Estudar HTML"
},
{
    id: 2,
    title: "Estudar CSS"
},
{
    id: 3,
    title: "Estudar JavaScript"
},
{
    id: 4,
    title: "Estudar PHP"
}];

function renderTodo(){
     
     document.querySelector('.todo').innerHTML = '';
     
    data.forEach(task =>{   
        let li = document.createElement('li');

        li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">
        ${task.title}
        </label>
        <button type="">X</button>
        `;

        li.querySelector('input').addEventListener("change", e => {
            if (e.target.checked) {

                li.classList.add('complete');

            } else {

                li.classList.remove('complete');

            }
        });

        li.querySelector('button').addEventListener('click', e => {
            console.warn("Você vai deletar este item?");
            console.warn(e.target);
            console.dir(e.target);
            console.log(e.target.parentNode.querySelector('input').id);

            let tempId = e.target.parentNode.querySelector('input').id.split('-')[1];
            console.log(tempId);

            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoId = idArray[1];
            let title = li.querySelector('label').innerText;

            console.log(todoId);

            if (confirm(`Deseja realmente excluir a tareffa ${title}?`)){

                data = data.filter(task => task.id !== parseInt(todoId));

                renderTodo();
            }
        });
        document.querySelector('.todo').append(li);
    }); 
};

document.querySelector('#new-task').addEventListener('keyup', e => {
    
    console.log(e);

    if (e.key === 'Enter') {
        console.log(e.target.value);

        data.push({
            id: data.length+1,
            title: e.target.value
        });     

        e.target.value = '';
        renderTodo();

    }
});

renderTodo();

console.log(data);