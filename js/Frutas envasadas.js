const validarEmpaqueFrutas = (entrada, salida) => {
    const pila = [];
  
    for (let fruta of entrada) pila.push(fruta);
  
    for (let fruta of salida) {
      if (pila.pop() !== fruta) return false;
    }
  
    return pila.length === 0;
  };
  
  const ingreso = prompt("Frutas ingresadas (ej: 🍎🍌🍇):");
  const egreso = prompt("Frutas salidas (ej: 🍇🍌🍎):");
  
  alert(validarEmpaqueFrutas(ingreso, egreso) ? "Empaque válido" : "Empaque inválido");
  