
//Ejercicio 1: Gestión de aprendices
// ARRAY PRINCIPAL DE APRENDICES

const aprendices = [
{ id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
{ id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
{ id: 3, nombre: "María", ficha: 3223875, nota: 4.8 }
];


// FUNCIÓN 1: Obtener aprobados

const aprobados = aprendices.filter(n => n.nota >=3.0);
console.log (aprobados)

// FUNCIÓN 1: Calcular promedio
const notas = aprendices.map(a => a.nota)

const sumas = notas.reduce((acum, nota) => {
return acum + nota})

const promedio = sumas / notas.length;
console.log(promedio);


// FUNCIÓN 3: Buscar por nombre
const nombres = aprendices.filter(u => u.nombre === "Ana")


// FUNCIÓN 4: Obtener nombres
const nombres2 = aprendices.map(a => a.nombre)
console.log(nombres2)



//Ejercicio 2: Filtros y transformaciones
const productos = [
{ nombre: "Laptop", precio: 1200000,stock: 5 },
{ nombre: "Mouse", precio: 35000,stock: 0 },
{ nombre: "Teclado", precio: 85000,stock: 12 }];

// FUNCIÓN 1: obtener Disponibles(productos)
const disponibles = productos.filter(n => n.stock >0);

// FUNCIÓN 2: calcularInventario(productos)
const stocks = productos.map(a => a.stock)

const suma = stocks.reduce((acum, cantidad) => {
return acum + cantidad})
console.log(suma)

// FUNCIÓN 3: aplicarDescuento(productos,porcentaje)
const aplicarDescuento = (productos, porcentaje) => productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio - (p.precio * porcentaje / 100)
  }));
console.log(aplicarDescuento(productos, 10))

// FUNCIÓN 4: ordenarPorPrecio(productos)
const precio = productos.sort((a,b) => a.precio - b.precio)
console.log(precio)




//Ejercicio 3: Manipulación de contactos
let contactos = [];
let IdUnico = 1

// FUNCIÓN 1: Agregar contacto

const agregarContacto = (nombre, tel, correo) => {
  const contacto = {
    Id: IdUnico++,
    nombre,
    telefono: tel,
    correo
  };
  contactos.push(contacto);
  return contacto;
};


// FUNCIÓN 2: Eliminar contacto

const eliminarContacto = (Id) => {
  const contactoEliminado = contactos.find(c => c.Id === Id);
  
  if (!contactoEliminado) {
    console.log(`No se encontró contacto con ID: ${Id}`);
    return;
  }
  
  contactos = contactos.filter(c => c.Id !== Id);
  console.log(`Contacto Eliminado: "${contactoEliminado.nombre}"`);
}

// FUNCIÓN 3: Buscar contacto

const buscarContacto = (nombre) => {
  console.log("Coincidencias encontradas:", nombre);
  
  return contactos.find(c =>
    c.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

// FUNCIÓN 4: Actualizar contacto

  const actualizarContacto = (id, nombre, tel, correo) => {
  const contacto = contactos.find(c => c.Id === id);

  if (!contacto) return "Contacto no encontrado";

  if (nombre) contacto.nombre = nombre;
  if (tel) contacto.telefono = tel;
  if (correo) contacto.correo = correo;

  return contacto;
};

// FUNCIÓN 5: ExportarJSON(contactos)

const exportarJSON = (contactos) => JSON.stringify(contactos, null, 2);

//Contactos

agregarContacto("Lucia", "123456789", "lucia@gmail.com");
agregarContacto("Eduardo", "987654321", "Eduarditopapito@hotmail.com");
agregarContacto("Ana", "123456789", "ana@gmail.com");
console.log(contactos)



//Buscar contacto
console.log(buscarContacto("Lucia"));

//Actualizar contacto
console.log(actualizarContacto(1,"Lucia", "123456789", "luciaperez@hotmail.com"))

//Eliminar contacto
eliminarContacto(1)
console.log(contactos)

//Exportar Json
console.log("\nExportar JSON:\n", exportarJSON(contactos));

