let contactos = [];
let ID = []

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

