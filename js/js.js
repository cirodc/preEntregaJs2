// Función para agregar una tarea
function agregarTarea(lista, descripcion, prioridad) {
    lista.push({ descripcion: descripcion, prioridad: prioridad, completada: false });
}

// Función para completar una tarea
function completarTarea(lista, indice) {
    if (indice >= 0 && indice < lista.length) {
        lista[indice].completada = true;
    }
}

// Función para filtrar tareas por prioridad
const filtrarTareasPorPrioridad = (lista, prioridad) => lista.filter(tarea => tarea.prioridad === prioridad);

// Función para mostrar el menú de prioridades
function mostrarMenuPrioridades() {
    console.log("Seleccione la prioridad de la tarea:");
    console.log("1. Alta");
    console.log("2. Media");
    console.log("3. Baja");
}

// Función para mostrar un alert para cada tarea completada
function mostrarAlertTareasCompletadas(tareasCompletadas) {
    tareasCompletadas.forEach(function(tarea) {
        if (tarea.completada) {
            var opcion = confirm("La tarea '" + tarea.descripcion + "' está completada. ¿Desea marcarla como incompleta?");
            if (opcion) {
                tarea.completada = false;
            }
        }
    });
}

// Array de tareas
var listaTareas = [];

// Variable para controlar la iteración del bucle
var agregarOtraTarea = true;

// Bucle para agregar tareas
while (agregarOtraTarea) {
    // Agregar una tarea mediante prompt
    var descripcionTarea = prompt("Ingrese la descripción de la tarea:");
    mostrarMenuPrioridades();
    var prioridadSeleccionada = parseInt(prompt("Seleccione la prioridad de la tarea (1, 2, 3):"));

    // Validar la prioridad seleccionada
    while (prioridadSeleccionada < 1 || prioridadSeleccionada > 3 || isNaN(prioridadSeleccionada)) {
        console.log("¡Opción inválida! Por favor, seleccione una prioridad válida.");
        mostrarMenuPrioridades();
        prioridadSeleccionada = parseInt(prompt("Seleccione la prioridad de la tarea (1, 2, 3):"));
    }

    // Convertir el número de prioridad en una cadena
    var prioridad;
    switch (prioridadSeleccionada) {
        case 1:
            prioridad = "Alta";
            break;
        case 2:
            prioridad = "Media";
            break;
        case 3:
            prioridad = "Baja";
            break;
    }

    // Agregar la tarea a la lista
    agregarTarea(listaTareas, descripcionTarea, prioridad);

    // Preguntar al usuario si quiere agregar otra tarea
    agregarOtraTarea = confirm("¿Desea agregar otra tarea?");
}

// Mostrar la lista de tareas final
console.log("\nLista de tareas:");
listaTareas.forEach(function(tarea, indice) {
    console.log(indice + 1 + ". Descripción: " + tarea.descripcion + ", Prioridad: " + tarea.prioridad + ", Completada: " + (tarea.completada ? "Sí" : "No"));
});


mostrarAlertTareasCompletadas(listaTareas);

alert("¡Interacción finalizada! Puedes revisar tu lista de tareas en la consola.");

console.log("Fin del programa.");
