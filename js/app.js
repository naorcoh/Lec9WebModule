var name = localStorage.getItem('userName');

if (name != 'null'){
    alert('wellcom,'+name);
}

$('#myBtn').on('click',function(){
    //var name = $("#myInput").attr('value')
    var name = $("#myInput").val();
    alert(`hellow, ${name}!`);
    
    localStorage.setItem('userName2',name);
})