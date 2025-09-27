const verificarAnagrama = (texto1, texto2) => {
    const normalizar = str =>
      str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  
    return normalizar(texto1) === normalizar(texto2);
  };
  
  // Ejemplo de prueba
  const palabraA = prompt("Ingresa la primera palabra:");
  const palabraB = prompt("Ingresa la segunda palabra:");
  
  const resultado = verificarAnagrama(palabraA, palabraB)
    ? "¡Sí, son anagramas!"
    : "No son anagramas.";
  
  alert(resultado);
  