const filtrarCandidatos = (requeridas, postulantes) => {
    const habilidadesBase = requeridas.map(skill => skill.toLowerCase());
    const resultado = [];
  
    postulantes.forEach(candidato => {
      const habilidades = candidato.skills.map(s => s.toLowerCase());
      const coincidencias = habilidades.filter(h => habilidadesBase.includes(h));
  
      const porcentaje = (coincidencias.length / habilidadesBase.length) * 100;
  
      if (porcentaje >= 70) resultado.push(candidato.id);
    });
  
    return resultado;
  };
  
  // Prueba
  const requeridas = ['HTML', 'CSS', 'JS'];
  const candidatos = [
    { id: 1, skills: ['html', 'css'] },
    { id: 2, skills: ['HTML', 'CSS', 'JS'] }
  ];
  
  console.log(filtrarCandidatos(requeridas, candidatos));
  