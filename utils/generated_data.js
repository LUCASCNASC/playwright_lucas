
function generateFirstName() {
  const firstNames = [
    'Alice', 'John', 'Carlos', 'Maria', 'Lucas', 'Sophia', 'Pedro', 'Isabela', 
    'Gabriel', 'Amanda', 'Felipe', 'Julia', 'Rafael', 'Larissa', 'Mateus', 
    'Isabel', 'Ricardo', 'Camila', 'Thiago', 'Renata'
  ];

  // Gera um índice aleatório para o primeiro nome
  const firstNameIndex = Math.floor(Math.random() * firstNames.length);

  // Retorna o primeiro nome
  return firstNames[firstNameIndex];
}

export { generateFirstName };