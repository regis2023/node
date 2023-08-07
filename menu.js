const inquirer = require('inquirer');

// Definir las opciones del menú
const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Selecciona una opción:',
    choices: [
      'Opción 1',
      'Opción 2',
      'Opción 3',
      'Salir'
    ]
  }
];

// Función principal que muestra el menú y maneja la selección del usuario
async function main() {
  let option = '';
  
  while (option !== 'Salir') {
    // Mostrar el menú y obtener la selección del usuario
    const answer = await inquirer.prompt(menuOptions);
    option = answer.option;

    // Realizar alguna acción basada en la opción seleccionada
    switch (option) {
      case 'Opción 1':
        console.log('Has seleccionado la Opción 1');
        // Agrega aquí el código para la Opción 1
        break;

      case 'Opción 2':
        console.log('Has seleccionado la Opción 2');
        // Agrega aquí el código para la Opción 2
        break;

      case 'Opción 3':
        console.log('Has seleccionado la Opción 3');
        // Agrega aquí el código para la Opción 3
        break;

      case 'Salir':
        console.log('Saliendo del menú...');
        break;

      default:
        console.log('Opción inválida');
        break;
    }
  }
}

// Llamar a la función principal para iniciar el menú
main();