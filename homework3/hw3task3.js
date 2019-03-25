function drawTriangle (char, rows) {
	let line;
	if (rows <= 3) 
		for (line = char; line.length <=3; line += char) {
			console.log(line + '    Сработало условие 1');
		} else if (rows > 3 && rows <= 100)
		for (line = char; line.length <= Math.round(rows); line += char) {
			console.log(line + '    Сработало условие 2');
    	} else if (rows == undefined)
      		console.log('Введите значение второго аргумента(число)');
      	else console.log('Значение второго аргумента должно быть меньше или равно 100');
}
drawTriangle('$', 3.78);