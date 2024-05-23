export const formatearFecha = (objFecha) => {
    const fecha = new Date(objFecha.seconds * 1000);

    const hora = `${fecha.getHours()}:${fecha.getMinutes().toString().padStart(2, '0')}`

    const nuevaFecha = fecha.toLocaleDateString("en-US");
    return `${nuevaFecha} - ${hora}`;
}