var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://viacep.com.br/ws/01001000/json');
xhr.send(null);

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}