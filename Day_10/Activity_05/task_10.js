
 function handleChildClick(event) {
    if (event.target.classList.contains('child')) {
        alert('Child button clicked!');
    }
}

document.getElementById('parent').addEventListener('click', handleChildClick);

document.getElementById('add-child').addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.className = 'child';
    newButton.textContent = 'New Child Button';
    document.getElementById('parent').appendChild(newButton);
});