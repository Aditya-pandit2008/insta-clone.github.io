document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('loginForm');
	form.addEventListener('submit', function(e){
		e.preventDefault();
		const user = document.getElementById('user').value.trim();
		// Minimal demo behavior — replace with real auth as needed
		if(!user){
			alert('Please enter username or email');
			return;
		}
		alert('Demo login — ' + user);
	});
});
