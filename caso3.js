const inquirer = require('inquirer');

// Definir las opciones del menú
const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Selecciona una opción:',
    choices: [
      '1. Crear tarea',
      '2. Listar tareas',
      '3. Listar tareas completas',
      '4. Listar tareas pendientes',
      '5. Completar tarea(s)',
      '6. Borrar tarea',
      '0. Salir'
    ]
  }
];

// Función principal que muestra el menú y maneja la selección del usuario
async function main() {
  let option = '';

  while (option !== '0. Salir') {
    // Mostrar el menú y obtener la selección del usuario
    const answer = await inquirer.prompt(menuOptions);
    option = answer.option;

    // Realizar alguna acción basada en la opción seleccionada
    switch (option) {
      case '1. Crear tarea':
        console.log('Has seleccionado la opción de crear tarea');
        // Agrega aquí el código para crear una tarea
        break;

      case '2. Listar tareas':
        console.log('Has seleccionado la opción de listar tareas');
        // Agrega aquí el código para listar todas las tareas
        break;

      case '3. Listar tareas completas':
        console.log('Has seleccionado la opción de listar tareas completas');
        // Agrega aquí el código para listar solo las tareas completas
        break;

      case '4. Listar tareas pendientes':
        console.log('Has seleccionado la opción de listar tareas pendientes');
        // Agrega aquí el código para listar solo las tareas pendientes
        break;

      case '5. Completar tarea(s)':
        console.log('Has seleccionado la opción de completar tarea(s)');
        // Agrega aquí el código para completar una o varias tareas
        break;

      case '6. Borrar tarea':
        console.log('Has seleccionado la opción de borrar tarea');
        // Agrega aquí el código para borrar una tarea
        break;

      case '0. Salir':
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
