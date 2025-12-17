Zdaznie onchange
<p>wpisz swoje imie</p>
<input type="text" id="fname" onchange="myFunction()"><br>


<script>
function myFunction(){
    let x=document.querySelector('#fname')
    x.value=x.value.toUpperCase();
}




</script>

