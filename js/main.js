//@ts-check
$(document).ready(() => {
    $('.sideshow-right').children().hide();
    $('#gform').on('submit', (e) => {
        $('#gform *').fadeOut(1000)
        $('#contacto').append('<div><h1 style="text-align: center">El formulario fue enviado con exito</h1></div>')
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
                document.getElementById('cert-frame').setAttribute('data', './assets/Angular 2 Getting Started.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Angular 2 Getting Started.pdf');
                break;                
            case 'cer-2':
                document.getElementById('cert-frame').setAttribute('data', './assets/Aprendizaje automatico y ciencia de datos.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Aprendizaje automatico y ciencia de datos.pdf');
                break;
            case 'cer-3':
                document.getElementById('cert-frame').setAttribute('data', './assets/Automated Business Readable Web Tests with Selenium and SpecFlow.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Automated Business Readable Web Tests with Selenium and SpecFlow.pdf');
                break;
            case 'cer-4':
                document.getElementById('cert-frame').setAttribute('data', './assets/Curso Maestro de Python 3 Aprende Desde Cero.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Curso Maestro de Python 3 Aprende Desde Cero.pdf');
                break;
            case 'cer-5':
                document.getElementById('cert-frame').setAttribute('data', './assets/Diagramas UML Estructurales para la Ingeniería del Software.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Diagramas UML Estructurales para la Ingeniería del Software.pdf');
                break;
            case 'cer-6':
                document.getElementById('cert-frame').setAttribute('data', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Hardware.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Hardware.pdf');
                break;
            case 'cer-7':
                document.getElementById('cert-frame').setAttribute('data', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Software.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Fundamentos TIC para profesionales de negocios - Desarrollo de Software.pdf');
                break;
            case 'cer-8':
                document.getElementById('cert-frame').setAttribute('data', './assets/Fundamentos TIC para profesionales de negocios programación.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Fundamentos TIC para profesionales de negocios programación.pdf');
                break;
            case 'cer-9':
                document.getElementById('cert-frame').setAttribute('data', './assets/Getting Started with Visual Studio Team Services (2018).pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Getting Started with Visual Studio Team Services (2018).pdf');
                break;
            case 'cer-10':
                document.getElementById('cert-frame').setAttribute('data', './assets/Herramientas de la Inteligencia de Negocios.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Herramientas de la Inteligencia de Negocios.pdf');
                break;
            case 'cer-11':
                document.getElementById('cert-frame').setAttribute('data', './assets/Introducción a la Ingeniería del Software.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Introducción a la Ingeniería del Software.pdf');
                break;
            case 'cer-12':
                document.getElementById('cert-frame').setAttribute('data', './assets/Introducción a la Programación.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Introducción a la Programación.pdf');
                break;
            case 'cer-13':
                document.getElementById('cert-frame').setAttribute('data', './assets/Introducción a la programación en Java empezando a programar.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Introducción a la programación en Java empezando a programar.pdf');
                break;
            case 'cer-14':
                document.getElementById('cert-frame').setAttribute('data', './assets/Introducción a la programación en Java escribiendo buen código.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Introducción a la programación en Java escribiendo buen código.pdf');
                break;
            case 'cer-15':
                document.getElementById('cert-frame').setAttribute('data', './assets/Jovenes a programar.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Jovenes a programar.pdf');
                break;
            case 'cer-16':
                document.getElementById('cert-frame').setAttribute('data', './assets/Python Fundamentals.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Python Fundamentals.pdf');
                break;
            case 'cer-17':
                document.getElementById('cert-frame').setAttribute('data', './assets/Python Getting Started.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Python Getting Started.pdf');
                break;
            case 'cer-18':
                document.getElementById('cert-frame').setAttribute('data', './assets/SQL desde cero.pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/SQL desde cero.pdf');
                break;
            case 'cer-19':
                document.getElementById('cert-frame').setAttribute('data', './assets/Unreal Engine 4 Mastery Create Multiplayer Games with C++ .pdf');
                document.getElementById('cert-down').setAttribute('href', './assets/Unreal Engine 4 Mastery Create Multiplayer Games with C++ .pdf');
                break;
            default:
                break;
        }
    })
});
