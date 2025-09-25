    // Diccionario de símbolos mágicos
    const values = {
      '◜': 1,     // 1
      '☽': 5,     // 5
      'ϟ': 10,    // 10
      '♆': 50,    // 50
      '⚡': 100   // 100
    };

    // Función para decodificar el conjuro
    function decodeSpell(spell) {
      if (typeof spell !== 'string') return NaN;

      for (let ch of spell) {
        if (!(ch in values)) return NaN; // símbolo desconocido
      }

      let total = 0;
      for (let i = 0; i < spell.length; i++) {
        const curr = values[spell[i]];
        const next = i + 1 < spell.length ? values[spell[i + 1]] : 0;

        if (next > curr) {
          total -= curr;
        } else {
          total += curr;
        }
      }

      return total;
    }

    // Ventana flotante al cargar la página
    const conjuro = prompt("🔮 Bienvenido al códice de Arkanus.\nIntroduce un conjuro mágico:");

    if (conjuro !== null) {
      const resultado = decodeSpell(conjuro);
      alert("✨ El resultado del conjuro es: " + resultado);
      console.log("Resultado:", resultado); // también en consola
    } else {
      alert("❌ No introdujiste ningún conjuro.");
    }