const formatearTiempo = segundos => {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const segs = String(segundos % 60).padStart(2, "0");
  
    return `${horas}:${minutos}:${segs}`;
  };
  
  const entrada = parseInt(prompt("Ingresa los segundos:"), 10);
  alert(`Tiempo: ${formatearTiempo(entrada)}`);
  