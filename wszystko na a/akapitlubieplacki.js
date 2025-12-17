function stworzAkapit() {
    const p = document.createElement('p');
    p.textContent = 'lubie placki';
    p.onclick = function() {
        this.textContent = 'katarzyna';
    };
    document.body.appendChild(p);
}
stworzAkapit();