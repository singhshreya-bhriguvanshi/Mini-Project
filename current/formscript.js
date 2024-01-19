$(document).ready(function(){
    document.getElementById('user-details').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const userName = document.getElementById('userName').value;
        localStorage.setItem('userName', userName);
    
        window.location.href = 'mainpage.html';
    });
    
})