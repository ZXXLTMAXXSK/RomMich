function mostrarAlerta() {
    Swal.fire({
        title: 'QUIERES JUGAR!',
        text: 'Ingresa la contraseña para continuar:',
        input: 'password',
        inputPlaceholder: 'Contraseña del Administrador',
        allowOutsideClick: false,
        allowEscapeKey: false, 
        allowEnterKey: false, 
        stopKeydownPropagation: false,
        confirmButtonText: 'JUGAR', 
        footer: 'Como Desbloquearias el Juego?',
        customClass: { 
            popup: 'ventana', 
            footer: 'footer-alert',
            confirmButton: 'btn-acept',
        },
        preConfirm: (inputValue) => {
            if (inputValue === '1122244444') {
                return true;
            } else {
                Swal.showValidationMessage('Contraseña incorrecta, inténtalo nuevamente.');
                return false;
            }
        }
    });
}
mostrarAlerta();
