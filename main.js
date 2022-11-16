const personas = [
	{ nombre: "Juan", edad: 18 },

	{ nombre: "María", edad: 16 },

	{ nombre: "Pedro", edad: 20 },

	{ nombre: "Pablo", edad: 15 },

	{ nombre: "Laura", edad: 19 },
]

// Devolver en un array las personas mayores de edad

function mayorDeEdad(personas) {
	const mayores = []

	for (let i = 0; i < personas.length; i++) {
		if (personas[i].edad >= 18) {
			mayores.push(personas[i])
		}
	}
	return mayores
}

console.log(mayorDeEdad(personas))

//Dime cual es la persona más joven del array
function masJoven(personas) {
	let masJoven = personas[0]

	for (let i = 0; i < personas.length; i++) {
		if (personas[i].edad < masJoven.edad) {
			masJoven = personas[i]
		}
	}
	return masJoven
}

console.log(masJoven(personas))

//Dime cual es la persona más mayor del array
function masMayor(personas) {
	let masMayor = personas[0]

	for (let i = 0; i < personas.length; i++) {
		if (personas[i].edad > masMayor.edad) {
			masMayor = personas[i]
		}
	}
	return masMayor
}

console.log(masMayor(personas))
