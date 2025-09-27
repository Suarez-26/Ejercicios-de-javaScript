const simbolosArcano = {
    "☽": 1,
    "☾": 5,
    "♁": 10,
    "⚕": 50,
    "⚡": 100,
  };
  
  const decodificarSimbolos = (entrada) => {
    let total = 0;
  
    for (let i = 0; i < entrada.length; i++) {
      const valorActual = simbolosArcano[entrada[i]];
      const siguienteValor = simbolosArcano[entrada[i + 1]] || 0;
  
      total += valorActual < siguienteValor ? -valorActual : valorActual;
    }
  
    return total;
  };
  
  const cadena = prompt("Introduce los símbolos arcanos:");
  alert(`El valor es: ${decodificarSimbolos(cadena)}`);
  