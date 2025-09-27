const compararTextos = (a, b) => {
    const palabrasA = new Set(a.toLowerCase().split(/\s+/));
    const palabrasB = new Set(b.toLowerCase().split(/\s+/));
  
    let comunes = 0;
  
    palabrasA.forEach(p => {
      if (palabrasB.has(p)) comunes++;
    });
  
    return comunes >= palabrasA.size / 2 || comunes >= palabrasB.size / 2;
  };
  
  const texto1 = prompt("Texto 1:");
  const texto2 = prompt("Texto 2:");
  
  alert(compararTextos(texto1, texto2) ? "Posible plagio" : "Textos diferentes");
  