const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/* NEW STUFFS */ 

const para = document.createElement('p')
para.textContent = "Hey I'm red!"
para.style.color = "red"

container.appendChild(para);

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue"

container.appendChild(h3);

const div2 = document.createElement('div')
div2.style.backgroundColor = "pink";
div2.style.border = "black";

content.appendChild(div2)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div!"

div2.appendChild(h1);

const p = document.createElement('p')
p.textContent = "Me too!"

div2.appendChild(p);



button.onclick = alertFunction;
