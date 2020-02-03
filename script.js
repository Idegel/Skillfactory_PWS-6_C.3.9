const city = document.querySelector('.city');
const delButton = document.querySelector('.delete_button');

city.oninput = function(){	
	document.cookie = `${encodeURIComponent('city')}=${encodeURIComponent(city.value)}; path=/; max-age=2592000`;
}

city.onkeypress = function(event){	
	if (event.key === 'Enter'){
		document.cookie = `${encodeURIComponent('city')}=${encodeURIComponent(city.value)}; path=/; max-age=2592000`;
	}
}

delButton.onclick = function(){
	document.cookie = `${encodeURIComponent('city')}=${encodeURIComponent(city.value)}; path=/; max-age=-1`;
	document.querySelector('.city_name').textContent = 'Cookie удалено.';
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const cityCookie = getCookie('city');

if (cityCookie !== undefined) {
	document.querySelector('.input').style.display = 'none';
	document.querySelector('.delete').style.cssText = 'display: flex; flex-direction: column; align-items: left;';
	document.querySelector('.city_name').textContent = 'Ваш город - ' + cityCookie;
}

const checks = document.querySelectorAll('.checkbox');
const saveButton = document.querySelector('.save_button');

if (localStorage.getItem('set') !== null){
	for (let i=0; i<6; i++){		
		let c = localStorage.getItem(i.toString()) === 'true';		
		checks[i].checked = c;
		checks[i].disabled = true;
	}
	saveButton.style.display = 'none';
}

saveButton.onclick = function(){
	localStorage.setItem('set', '1');
	checks.forEach((item, index) => localStorage.setItem(index.toString(), item.checked.toString()));
	saveButton.style.display = 'none';
}
