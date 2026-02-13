// ============================================
// ARRAY PRINCIPAL DE APRENDICES
// ============================================

const aprendices = [
{ id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
{ id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
{ id: 3, nombre: "María", ficha: 3223875, nota: 4.8 }
];



// ============================================
// FUNCIÓN 1: Obtener aprobados
// ============================================
const aprobados = aprendices.filter(n => n.nota >=3.0);
console.log (aprobados)

// ============================================
// FUNCIÓN 1: Calcular promedio
// ============================================
const notas = aprendices.map(a => a.nota)

const suma = notas.reduce((acum, nota) => {
return acum + nota})

const promedio = suma / notas.length;
console.log(promedio);

// ============================================
// FUNCIÓN 3: Buscar por nombre
// ============================================

const nombre = aprendices.filter(n =>
n.nombre);
console.log(nombre)











