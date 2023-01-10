function getLocation(coordinates, commands) {
	const arr =[...coordinates];
	for(let i = 0; i < commands.length; i++){
		switch(commands[i]){
			case 'forward': arr[1]++; break;
			case 'back': arr[1]--; break;
			case 'right': arr[0]++; break;
			case 'left': arr[0]--; break;
		}
	}
	return arr;
}


console.log( getLocation([2, 3], ['back', 'back', 'back', 'right']) );