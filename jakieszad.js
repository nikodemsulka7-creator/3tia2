<style> p{ border:solid1px red; }</style>
const box = document.querySelector('#box');
const akapit = document.createElement('p')
akapit.classList.add('p');
akapit.innerHTML = "to jest akapit"
box.appendChild(akapit)