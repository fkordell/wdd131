const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
	const chapter = input.value.trim();
	if (chapter){
		const li = document.createElement('li');
		li.textContent = chapter;
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'X';
		deleteButton.className = 'delete';
		deleteButton.addEventListener('click', function(){
            list.removeChild(li);
        });
		li.appendChild(deleteButton);
		list.appendChild(li);
		input.value = '';
	};
	input.focus();
});
