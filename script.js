// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== TOGGLE DEL MENÚ LATERAL CON HAMBURGUESA ==========
    
    // Selecciona el botón hamburguesa del DOM
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    // Selecciona el sidebar (menú lateral)
    const sidebar = document.getElementById('sidebar');
    
    // Variable para rastrear si el sidebar está visible u oculto
    let sidebarVisible = true;
    
    // Añade un evento de clic al botón hamburguesa
    hamburgerBtn.addEventListener('click', function() {
        // Alterna la clase 'hidden' en el sidebar
        sidebar.classList.toggle('hidden');
        
        // Actualiza el estado de visibilidad
        sidebarVisible = !sidebarVisible;
        
        // Ajusta el margen del contenido principal según el estado del sidebar
        const mainContent = document.querySelector('.main-content');
        if (sidebarVisible) {
            // Si el sidebar está visible, añade margen izquierdo
            mainContent.style.marginLeft = '88px';
        } else {
            // Si el sidebar está oculto, quita el margen izquierdo
            mainContent.style.marginLeft = '0';
        }
    });
    
    
    // ========== CAMBIO DE CURSOR EN BOTONES ==========
    
    // Selecciona todos los botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Para cada botón de navegación
    navButtons.forEach(button => {
        // Cuando el ratón entra en el botón
        button.addEventListener('mouseenter', function() {
            // Cambia el cursor a pointer (manita)
            this.style.cursor = 'pointer';
        });
        
        // Cuando el ratón sale del botón
        button.addEventListener('mouseleave', function() {
            // Vuelve al cursor normal
            this.style.cursor = 'default';
        });
    });
    
    
    // ========== CAMBIO DE CURSOR EN BOTONES DEL SIDEBAR ==========
    
    // Selecciona todos los botones del sidebar
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    
    // Para cada botón del sidebar
    sidebarButtons.forEach(button => {
        // Cuando el ratón entra en el botón
        button.addEventListener('mouseenter', function() {
            // Cambia el cursor a pointer
            this.style.cursor = 'pointer';
        });
        
        // Cuando el ratón sale del botón
        button.addEventListener('mouseleave', function() {
            // Vuelve al cursor normal
            this.style.cursor = 'default';
        });
    });
    
    
    // ========== RESPONSIVE: OCULTAR SIDEBAR EN MÓVILES ==========
    
    // Función para verificar el ancho de la ventana
    function checkWindowSize() {
        // Si el ancho de la ventana es menor a 768px (móvil/tablet)
        if (window.innerWidth < 768) {
            // Oculta el sidebar por defecto
            sidebar.classList.add('hidden');
            sidebarVisible = false;
            
            // Quita el margen del contenido principal
            document.querySelector('.main-content').style.marginLeft = '0';
        } else {
            // En pantallas grandes, muestra el sidebar
            sidebar.classList.remove('hidden');
            sidebarVisible = true;
            
            // Añade margen al contenido principal
            document.querySelector('.main-content').style.marginLeft = '88px';
        }
    }
    
    // Ejecuta la función al cargar la página
    checkWindowSize();
    
    // Ejecuta la función cada vez que se redimensiona la ventana
    window.addEventListener('resize', checkWindowSize);
    
    
    // ========== ANIMACIÓN SUAVE AL HACER CLIC EN BOTONES ==========
    
    // Selecciona todos los botones (navegación y sidebar)
    const allButtons = document.querySelectorAll('.nav-btn, .sidebar-btn');
    
    // Para cada botón
    allButtons.forEach(button => {
        // Cuando se hace clic en el botón
        button.addEventListener('click', function() {
            // Añade una pequeña animación de escala
            this.style.transform = 'scale(0.95)';
            
            // Después de 150ms, vuelve al tamaño normal
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
});

