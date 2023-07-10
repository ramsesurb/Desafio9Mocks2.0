export const generateProductErrorParam = (id) => {
    const errorMessage = `El id no es válido. Debe ser un número entero, pero se recibió un valor invalido`;
    console.log("Mensaje de error generado:", errorMessage);
    return errorMessage;
  };
export const generateUserErrorParam = (id) => {
    const errorMessage = `El id no es válido. Debe ser un número entero, pero se recibió un valor invalido`;
    console.log("Mensaje de error generado:", errorMessage);
    return errorMessage
}
export const generateCartErrorParam = () => {
    const errorMessage3 = `no se encontro un Carrito con este valor`;
    console.log("Mensaje de error generado:", errorMessage3);
    return errorMessage
}
