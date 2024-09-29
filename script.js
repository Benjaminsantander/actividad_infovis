// Gráfico de Plotly.js
var trace = {
    x: ["Whatever People Say I Am, That's What I'm Not", "Favourite Worst Nightmare", "Humbug", 
        "Suck It and See", "AM", "Tranquility Base Hotel & Casino", "The Car"], // Información de ventas.
    y: [2901500, 1381429, 300000, 300000, 3060431, 100000, 100000], 
    type: 'bar'
};

var data = [trace];

var layout = {
    title: 'Ventas de Álbumes',
    xaxis: {
        title: 'Álbumes',
        tickangle: 45, // Gira los títulos para que no se desborden
        automargin: true  // Ajusta automáticamente los márgenes
    },
    yaxis: { title: 'Ventas' },
    margin: { t: 50, b: 100 } // Ajusta márgenes para evitar solapamientos
};

// Renderiza el gráfico
Plotly.newPlot('myPlot', data, layout);

// Tone.js para reproducir una canción al hacer hover sobre las barras
let audioStarted = false;
let currentPlayer = null;  // Variable para almacenar el reproductor de la canción actual

// Aquí se carga una canción para cada barra (verifica que las rutas sean correctas)
const sounds = [
    "I_Bet_You_Look_Good_On_The_Dancefloor.mp3",
    "Brianstorm.mp3",
    "Crying_Lightning.mp3", 
    "Don't_Sit_Down_'Cause_I've_Moved_Your_Chair.mp3", 
    "do_i_wanna_know.mp3",
    "Four_Out_Of_Five.mp3",
    "Thered_Better_Be_A_Mirrorball.mp3"
];

// Función para habilitar el AudioContext después de un clic
function enableAudioContext() {
    if (!audioStarted) {
        Tone.start().then(() => {
            console.log('AudioContext iniciado');
            audioStarted = true;
        }).catch((e) => {
            console.error('Error iniciando el AudioContext: ', e);
        });
    }
}

// Añadir un evento de clic para reanudar el AudioContext
document.body.addEventListener('click', enableAudioContext);

// Evento plotly_hover para reproducir sonidos cuando se pasa el cursor
// document.getElementById('myPlot').on('plotly_hover', function(data){
//     const pointIndex = data.points[0].pointIndex; // Índice del punto que se está pasando por encima
    
//     // Solo reproducir si el AudioContext está activo
//     if (audioStarted) {
//         // Si hay una canción en reproducción, detenerla antes de reproducir la nueva
//         if (currentPlayer !== null) {
//             currentPlayer.stop();
//             console.log("Canción actual pausada");
//         }

//         // Verificamos que se selecciona un índice correcto
//         if (pointIndex >= 0 && pointIndex < sounds.length) {
//             // Crear el nuevo reproductor para la canción actual
//             currentPlayer = new Tone.Player(sounds[pointIndex]).toDestination();
//             currentPlayer.autostart = true; // Inicia automáticamente cuando el hover ocurre

//             // Mensaje para confirmar que el archivo de audio ha sido llamado
//             console.log("Reproduciendo:", sounds[pointIndex]);
//         } else {
//             console.warn("Índice fuera de rango:", pointIndex);
//         }
//     } else {
//         console.warn("AudioContext no iniciado aún. Haz clic en la página primero.");
//     }
// });

// Evento plotly_click para reproducir sonidos al hacer clic
document.getElementById('myPlot').on('plotly_click', function(data){
    const pointIndex = data.points[0].pointIndex;

    if (audioStarted) {
        // Si hay una canción en reproducción, detenerla antes de reproducir la nueva
        if (currentPlayer !== null) {
            currentPlayer.stop();
            console.log("Canción actual pausada");
        }

        // Reproducir la nueva canción
        currentPlayer = new Tone.Player(sounds[pointIndex]).toDestination();
        currentPlayer.autostart = true;

        console.log("Reproduciendo (clic):", sounds[pointIndex]);
    } else {
        console.warn("AudioContext no iniciado aún. Haz clic en la página primero.");
    }
});

// Función para detener la canción actual
function stopCurrentSong() {
    if (currentPlayer !== null) {
        currentPlayer.stop(); // Detiene la canción
        console.log("Canción detenida");
        currentPlayer = null;  // Reinicia el reproductor actual
    } else {
        console.log("No hay canción sonando");
    }
}

// Añadir evento de clic al botón para detener la canción
document.getElementById('stopButton').addEventListener('click', stopCurrentSong);
