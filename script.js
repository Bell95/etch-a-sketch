const container = document.querySelector('#container');
const divBlock1 = document.createElement('div');
const divBlock2 = document.createElement('div');
container.appendChild(divBlock1);
container.appendChild(divBlock2);


divBlock1.style.backgroundColor = 'blue';
divBlock1.style.height = '200px'
divBlock1.style.width = '200px';

divBlock2.style.backgroundColor = 'grey';
divBlock2.style.height = '200px'
divBlock2.style.width = '200px';


container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red';
});
// divBlock1.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'red';
// });
// divBlock2.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'red';
// });