const obtenerArchivosInseguros = (descargaSegura, registros) => {
    const comprometidos = new Set();
  
    registros.forEach(([id, fecha]) => {
      if (fecha > descargaSegura) {
        comprometidos.add(id);
      }
    });
  
    return Array.from(comprometidos).sort((a, b) => a - b);
  };
  
  const timestamp = parseInt(prompt("Ingresa el timestamp seguro:"), 10);
  const datos = [
    [42, 1670000500],
    [8, 1670000700],
  ];
  
  console.log(obtenerArchivosInseguros(timestamp, datos));
  