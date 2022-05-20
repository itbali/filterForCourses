// Список курсов
let courses = [
	{name: "Courses in England", prices: [0, 100]},
	{name: "Courses in Germany", prices: [500, null]},
	{name: "Courses in Italy", prices: [100, 200]},
	{name: "Courses in Russia", prices: [null, 400]},
	{name: "Courses in China", prices: [50, 250]},
	{name: "Courses in USA", prices: [200, null]},
	{name: "Courses in Kazakhstan", prices: [56, 324]},
	{name: "Courses in France", prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//Функция фильтрации курсов
//	{name: "Courses in Germany", prices: [500, null]} - это если курсы в Германии от 500.
const coursesFilter = (arrayOfCourses, range) => {
	if (range[0] === null) {
		range[0] = 0
	}
	if (range[1] === null) {
		range[1] = Infinity
	}
	let [x, y] = range
	let result = []
	arrayOfCourses.forEach(el => {
			if (el.prices[1] === null) {
				el.prices[1] = Infinity
			}
			if (el.prices[0] === null) {
				el.prices[0] = 0
			}
			let [a, b] = el.prices
			if ((x >= a && x <= b) || (y >= a && y <= b)) {
				result.push(el)
			}
		}
	)
	return result
}

//Функция фильтрации курсов
//	{name: "Courses in Germany", prices: [500, null]} - а тут если цена фиксирована 500
//	{name: "Courses in Russia", prices: [null, 400]}, - тут 400 и тд. Т.е. 1 цифра - фикс цены курсов не важно
//	с какой стороны стоит цифра


const coursesFilterSinglePrice = (arrayOfCourses, range) => {
	if (range[0] === null) {
		range[0] = 0
	}
	if (range[1] === null) {
		range[1] = Infinity
	}
	let [x, y] = range
	let result = []
	arrayOfCourses.forEach(el => {
			if (el.prices[0] === null && el.prices[1] === null) {
				//если цены не заданы - показать все курсы, присвоив
				// диапозон цен от 0 до бесконечности
				el.prices[0] = 0
				el.prices[1] = Infinity
			} else {
				//если не задана одна из сторон цен, то присвоить ее противоположной
				if (el.prices[1] === null) {
					el.prices[1] = el.prices[0]
				}
				if (el.prices[0] === null) {
					el.prices[0] = el.prices[1]
				}
			}
			let [a, b] = el.prices
			if ((x >= a && x <= b) || (y >= a && y <= b)) {
				result.push(el)
			}
		}
	)
	return result
}
