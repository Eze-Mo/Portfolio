$(document).ready(() => {
    $('.sideshow-right').children().hide(); 
    $('#gform').on('submit', (e) => {
        $('#gform *').fadeOut(1000)
        $('#gform *').delay(100000)
        $('#gform *').prepend('El formulario fue enviado con exito')
    });
    $('.sideshow-right').children("#core").show();
    $("#sideshow-left").bind('click', function(event) {
        switch (event.target.id) {
            case 'core':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#core").show();
                break;
            case 'blazor':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#blazor").show();
                break;
            case 'htmlcss':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#htmlcss").show();
                break;
            case 'javascript':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#javascript").show();
                break;
            case 'nodejs':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#nodejs").show();
                break;
            case 'python':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#python").show();
                break;
            case 'mysql':
                $('.sideshow-right').children().hide(); 
                $('.sideshow-right').children("#mysql").show();
                break;
            default:
                break;
        }
    })
    $("#centificaciones").bind('click', function(event) {
        switch (event.target.id) {
            case 'cer-1':
                document.getElementById('cert-frame').setAttribute('src', './assets/Angular 2 Getting Started.pdf');
                break;                
            case 'cer-2':
                document.getElementById('cert-frame').setAttribute('src', './assets/Aprendizaje automatico y ciencia de datos.pdf');
                break;
            case 'cer-3':
                document.getElementById('cert-frame').setAttribute('src', './assets/Automated Business Readable Web Tests with Selenium and SpecFlow');
                break;
            case 'cer-4':
                document.getElementById('cert-frame').setAttribute('src', './assets/Curso Maestro de Python 3 Aprende Desde Cero.pdf');
                break;
            case 'cer-5':
                document.getElementById('cert-frame').setAttribute('src', './assets/Diagramas UML Estructurales para la Ingeniería del Software.pdf');
                break;
            case 'cer-6':
                document.getElementById('cert-frame').setAttribute('src', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Hardware.pdf');
                break;
            case 'cer-7':
                document.getElementById('cert-frame').setAttribute('src', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Software.pdf');
                break;
            case 'cer-8':
                document.getElementById('cert-frame').setAttribute('src', './assets/Fundamentos TIC para profesionales de negocios programación.pdf');
                break;
            case 'cer-9':
                document.getElementById('cert-frame').setAttribute('src', './assets/Getting Started with Visual Studio Team Services (2018).pdf');
                break;
            case 'cer-10':
                document.getElementById('cert-frame').setAttribute('src', './assets/Herramientas de la Inteligencia de Negocios.pdf');
                break;
            case 'cer-11':
                document.getElementById('cert-frame').setAttribute('src', './assets/Introducción a la Ingeniería del Software.pdf');
                break;
            case 'cer-12':
                document.getElementById('cert-frame').setAttribute('src', './assets/Introducción a la Programación.pdf');
                break;
            case 'cer-13':
                document.getElementById('cert-frame').setAttribute('src', './assets/Introducción a la programación en Java empezando a programar.pdf');
                break;
            case 'cer-14':
                document.getElementById('cert-frame').setAttribute('src', './assets/Introducción a la programación en Java escribiendo buen código.pdf');
                break;
            case 'cer-15':
                document.getElementById('cert-frame').setAttribute('src', './assets/Jovenes a programar.pdf');
                break;
            case 'cer-16':
                document.getElementById('cert-frame').setAttribute('src', './assets/Python Fundamentals.pdf');
                break;
            case 'cer-17':
                document.getElementById('cert-frame').setAttribute('src', './assets/Python Getting Started.pdf');
                break;
            case 'cer-18':
                document.getElementById('cert-frame').setAttribute('src', './assets/SQL desde cero.pdf');
                break;
            case 'cer-19':
                document.getElementById('cert-frame').setAttribute('src', './assets/Unreal Engine 4 Mastery Create Multiplayer Games with C++ .pdf');
                break;
            default:
                break;
        }
    })
});
