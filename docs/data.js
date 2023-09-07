
const preguntas = [
  { id: 0,
    categoria: "Tecnología", 
    pregunta: "¿Qué es un dispositivo?", 
    respuesta: "Es un objeto o elemento físico cuyo fin, es realizar una función específica" 
  },

  { id: 1,
    categoria: "Tecnología", 
    pregunta: "¿Qué es hardware?", 
    respuesta: "Es es la estructura física de un dispositivo electrónico" 
  },

  { id: 2,
    categoria: "Tecnología", 
    pregunta: "¿Qué es software?", 
    respuesta: "Es el conjunto de instrucciones, o programas que establecen el funcionamiento de un dispositivo electrónico" 
  },

  { id: 3,
    categoria: "Tecnología", 
    pregunta: "¿Qué es sistema operativo?", 
    respuesta: "software encargado de administrar los recursos del sistema de un dispositivo, ejecutar programas y proporcionar una interfaz" 
  },

  { id: 4,
    categoria: "Tecnología", 
    pregunta: "¿Qué es una aplicación?", 
    respuesta: "software diseñado como una herramienta para realizar funciones concretas, pensada para ser de uso común" 
  },

  { id: 5,
    categoria: "Tecnología", 
    pregunta: "¿Qué es una estructura de archivos y carpetas?", 
    respuesta: "forma de organización de la información en un sistema de almacenamiento, puede proporcionar una jerarquía" 
  },

  { id: 6,
    categoria: "Tecnología", 
    pregunta: "¿Qué es interfaz gráfica?", 
    respuesta: "(GUI por sus siglas en inglés), forma visual de interacción, con un programa o sistema" 
  },

  { id: 7,
    categoria: "Tecnología", 
    pregunta: "¿Qué es interfaz de línea de comandos?", 
    respuesta: "(CLI por sus siglas en inglés), forma de interacción con un programa o sistema a través de comandos de texto" 
  },

  { id: 8,
    categoria: "Tecnología", 
    pregunta: "¿Qué es internet?", 
    respuesta: "Es la infraestructura, una red de conexión global de computadores" 
  },

  { id: 9,
    categoria: "Tecnología", 
    pregunta: "¿Qué es web?", 
    respuesta: "Es un sistema de información enlazados entre sí, que operan en la internet" 
  },

  { id: 10,
    categoria: "Tecnología", 
    pregunta: "¿Qué es navegador web?", 
    respuesta: "Aplicación que permite a los usuarios acceder y ver sitios web" 
  },

  { id: 11,
    categoria: "Tecnología", 
    pregunta: "¿Qué es página web?", 
    respuesta: "Es un documento electrónico que se muestra en la web, y puede hacer parte de un sitio web" 
  },

  { id: 12,
    categoria: "Tecnología", 
    pregunta: "¿Qué es sitio web?", 
    respuesta: "Es un conjunto de páginas web interconectadas que se muestra en un mismo dominio web" 
  },

  { id: 13,
    categoria: "Tecnología", 
    pregunta: "¿Qué es aplicación web?", 
    respuesta: "Software que se ejecuta en un navegador, es interactivo y permite hacer acciones complejas" 
  },

  { id: 14,
    categoria: "Tecnología", 
    pregunta: "¿Qué es buscador web?", 
    respuesta: "Servicio en línea que permite a los usuarios buscar y encontrar información en la web" 
  },

  { id: 15,
    categoria: "Tecnología", 
    pregunta: "¿Qué es desarrollo web?", 
    respuesta: "Proceso de crear y mantener sitios web y aplicaciones web" 
  },

  { id: 16,
    categoria: "Tecnología", 
    pregunta: "¿Qué es modelo cliente - servidor?", 
    respuesta: "Arquitectura de red, donde los clientes hacen peticiones y los servidores responden a dichas peticiones" 
  },
  { id: 17,
    categoria: "Tecnología", 
    pregunta: "¿Qué pasa cuando navego a: “https://bit.institute”?", 
    respuesta: "Se accede al sitio web de Bit Institute. Se puede encontrar información sobre los servicios que ofrece esta institución" 
  },

  { id: 18,
    categoria: "Tecnología", 
    pregunta: "¿Qué es editor de código?", 
    respuesta: "Herramienta usada para escribir, modificar y/u organizar código" 
  },

  { id: 19,
    categoria: "Tecnología", 
    pregunta: "¿Qué es sintaxis?", 
    respuesta: "reglas y estructuras gramaticales que se deben seguir al escribir código en un lenguaje de programación" 
  },

  { id: 20,
    categoria: "Tecnología", 
    pregunta: "¿Qué es comentario?", 
    respuesta: "Es un texto descriptivo que no es ejecutado como parte del programa, sirve para dar información adicional" 
  },

  { id: 21,
    categoria: "Tecnología", 
    pregunta: "¿Qué es palabra clave?", 
    respuesta: "Palabra reservada en un lenguaje de programación que tiene un significado especial" 
  },

  { id: 22,
    categoria: "Tecnología", 
    pregunta: "¿Qué es herencia?", 
    respuesta: "Concepto de la POO, donde una clase puede heredar atributos o métodos de otra clase" 
  },

  { id: 23,
    categoria: "Tecnología", 
    pregunta: "¿Qué es sobreescritura?", 
    respuesta: "Concepto de la POO, donde un método previamente definido, puede ser implementado de forma diferente en una subclase" 
  },

  { id: 24,
    categoria: "Tecnología", 
    pregunta: "¿Qué son las convenciones?", 
    respuesta: "Prácticas recomendadas al escribir código, para facilitar la comprensión del mismo" 
  },

  { id: 25,
    categoria: "Tecnología", 
    pregunta: "¿Qué son las buenas prácticas?", 
    respuesta: "Pautas establecidas para desarrollar software de alta calidad, implementa las convenciones para esto" 
  },

  { id: 26,
    categoria: "Git y GitHub", 
    pregunta: "¿Qué es sistema de control de versiones?", 
    respuesta: "Herramienta para gestionar y controlar los cambios en el código" 
  },

  { id: 27,
    categoria: "Git y GitHub", 
    pregunta: "¿Qué es alojamiento de control de versiones?", 
    respuesta: "servicios en línea que proporcionan almacenamiento de repositorios usando un sistema de control de versiones" 
  },

  { id: 28,
    categoria: "Git y GitHub", 
    pregunta: "¿Qué un es repositorio?", 
    respuesta: "Espacio de almacenamiento que contiene todos los archivos y código de un proyecto de software" 
  },

  { id: 29,
    categoria: "Git y GitHub", 
    pregunta: "¿Qué es rama?", 
    respuesta: "Versión paralela de un proyecto de software que se usa para no afectar la versión principal del proyecto" 
  },

  { id: 30,
    categoria: "HTML", 
    pregunta: "¿Qué es MARKDOWN?", 
    respuesta: "Lenguaje de marcado lijero que luego se puede convertir fácilmente a HTML" 
  },

  { id: 31,
    categoria: "HTML", 
    pregunta: "¿Qué es README.md?", 
    respuesta: "Archivo de texto que usa la síntaxis de Markdown, y se usa pára dar información sobre el proyecto y cómo usarlo" 
  },

  { id: 32,
    categoria: "HTML", 
    pregunta: "¿Qué es HTML?", 
    respuesta: "Lenguaje de marcado de hipertexto usado para crear y maquetar el contenido de las páginas web" 
  },

  { id: 33,
    categoria: "HTML", 
    pregunta: "¿Qué es una etiqueta?", 
    respuesta: "Construcción de código usada en HTML para marcar y estructurar el contenido " 
  },

  { id: 34,
    categoria: "HTML", 
    pregunta: "¿Qué es metadata?", 
    respuesta: "Información importante sobre el contenido de una página web que no es visualizada" 
  },

  { id: 35,
    categoria: "HTML", 
    pregunta: "¿Qué es jerarquía?", 
    respuesta: "Estructura organizada donde los elementos se clasifican según su importancia" 
  },

  { id: 36,
    categoria: "HTML", 
    pregunta: "¿Qué es accesibilidad?", 
    respuesta: "Práctica de diseñar y desarrollar sitios web de forma que puedan ser usados por personas con discapacidad" 
  },

  { id: 37,
    categoria: "HTML", 
    pregunta: "¿Qué es SEO?", 
    respuesta: "Proceso de mejorar la visibilidad y la clasificación de un sitio web en los resultados de los motores de búsqueda" 
  },

  { id: 38,
    categoria: "CSS", 
    pregunta: "¿Qué es CSS?", 
    respuesta: "Lenguaje de hojas de estilo usado para darle el aspecto visual o diseño a un documento HTML" 
  },

  { id: 39,
    categoria: "CSS", 
    pregunta: "¿Qué es implementar?", 
    respuesta: "llevar a cabo una solución o un conjunto de funcionalidades" 
  },

  { id: 40,
    categoria: "CSS", 
    pregunta: "¿Qué es regla?", 
    respuesta: "Declaración que especifica cómo se debe aplicar un estilo a uno o varios elementos HTML" 
  },

  { id: 41,
    categoria: "CSS", 
    pregunta: "¿Qué es especificidad?", 
    respuesta: "manera mediante la cual se deciden qué reglas en CSS son más relevantes para un elemento y, por lo tanto, serán aplicados." 
  },

  { id: 42,
    categoria: "CSS", 
    pregunta: "¿Qué es un selector?", 
    respuesta: "Patrón usado para seleccionar elementos HTML para aplicarles estilos con CSS" 
  },

  { id: 43,
    categoria: "CSS", 
    pregunta: "¿Qué es agrupación de selectores?", 
    respuesta: "Técnica que permite aplicar estilos a varios elementos distintos utilizando un conjunto común de reglas CSS" 
  },

  { id: 44,
    categoria: "CSS", 
    pregunta: "¿Qué es modelo de caja?", 
    respuesta: "Cada elemento HTML se representa como una caja rectangular que consta de contenido, padding, borde y margen" 
  },

  { id: 45,
    categoria: "CSS", 
    pregunta: "¿Qué es una unidad?", 
    respuesta: "Se utilizan para especificar las dimensiones de los elementos" 
  },

  { id: 46,
    categoria: "CSS", 
    pregunta: "¿Qué es un pseudo elemento?", 
    respuesta: "Parte de un elemento que se puede seleccionar y estilizar de manera independiente" 
  },

  { id: 47,
    categoria: "CSS", 
    pregunta: "¿Qué es pseudo clase?", 
    respuesta: "Estado o una acción específica de un elemento que se puede seleccionar y estilizar de manera independiente. " 
  },

  { id: 48,
    categoria: "CSS", 
    pregunta: "¿Qué es propiedad personalizada?", 
    respuesta: "También conocidas como variables CSS, estas propiedades se pueden utilizar para almacenar valores reutilizables" 
  },

  { id: 49,
    categoria: "CSS", 
    pregunta: "¿Qué es layout?", 
    respuesta: "Organización de los elementos en una página" 
  },

  { id: 50,
    categoria: "CSS", 
    pregunta: "¿Qué es responsivo?", 
    respuesta: "Utiliza un patron de diseño que se ajusta al tamaño disponible" 
  },

  { id: 51,
    categoria: "CSS", 
    pregunta: "¿Qué es adaptativo?", 
    respuesta: "Utiliza diferentes patrones de diseño, y utiliza el necesario para cada pantalla de dispositivo" 
  },

  { id: 52,
    categoria: "CSS", 
    pregunta: "¿Qué es primer enfoque?", 
    respuesta: "Estrategia de diseño web que se basa en el desarrollo y diseño de un sitio web primero para dispositivos móviles" 
  },

  { id: 53,
    categoria: "CSS", 
    pregunta: "¿Qué es interfaz de usuario?", 
    respuesta: "Parte visual de un software o aplicación, con la que el usuario interactúa" 
  },

  { id: 54,
    categoria: "CSS", 
    pregunta: "¿Qué es experiencia de usuario?", 
    respuesta: "Forma en que un usuario percibe y experimenta su interacción con un producto sistema o servicio" 
  },

  { id: 55,
    categoria: "Javascript", 
    pregunta: "¿Qué es solución de problemas?", 
    respuesta: "Proceso para abordar dificultades o un desafío específico y encontrar una solución" 
  },

  { id: 56,
    categoria: "Javascript", 
    pregunta: "¿Qué es lógica?", 
    respuesta: "En programación, es la organización coherente de las instrucciones de un programa" 
  },

  { id: 57,
    categoria: "Javascript", 
    pregunta: "¿Qué es algoritmo?", 
    respuesta: "Secuencia de pasos finitos bien definidos que resuelven un problema de programación" 
  },

  { id: 58,
    categoria: "Javascript", 
    pregunta: "¿Qué es metodología de desarrollo?", 
    respuesta: "Conjunto de prácticas utilizados para llevar a cabo el proceso de desarrollo de software de manera eficiente y efectiva" 
  },

  { id: 59,
    categoria: "Javascript", 
    pregunta: "¿Qué es lenguaje de programación?", 
    respuesta: "Reglas y símbolos que permiten a los desarrolladores comunicarse con las computadoras" 
  },

  { id: 60,
    categoria: "Javascript", 
    pregunta: "¿Qué es motor de JavaScript?", 
    respuesta: "Son utilizados por los navegadores web para interpretar y ejecutar el código JavaScript" 
  },

  { id: 61,
    categoria: "Javascript", 
    pregunta: "¿Qué es implementar JavaScript?", 
    respuesta: "Es hacer funcionar un código de javascript en un navegador web o servidor" 
  },

  { id: 62,
    categoria: "Javascript", 
    pregunta: "¿Qué es un script?", 
    respuesta: "Conjunto de instrucciones escritas en un lenguaje de programación" 
  },

  { id: 63,
    categoria: "Javascript", 
    pregunta: "¿Qué es una etiqueta script?", 
    respuesta: "Etiqueta HTML utilizada para incluir y ejecutar código JavaScript dentro de un documento HTML" 
  },

  { id: 64,
    categoria: "Javascript", 
    pregunta: "¿Qué es etiqueta noscript?", 
    respuesta: "Se utiliza para mostrar contenido alternativo en caso de que el navegador del usuario no admita JavaScript" 
  },

  { id: 65,
    categoria: "Javascript", 
    pregunta: "¿Qué es el objeto window?", 
    respuesta: "Objeto global en JavaScript que representa la ventana del navegador " 
  },

  { id: 66,
    categoria: "Javascript", 
    pregunta: "¿Qué es interacción?", 
    respuesta: "Comunicación entre el usuario y el sistema a través de una interfaz" 
  },

  { id: 67,
    categoria: "Javascript", 
    pregunta: "¿Qué es declaración?", 
    respuesta: "Instrucción utilizada para definir variables, asignar valores, llamar funciones, etc." 
  },

  { id: 68,
    categoria: "Javascript", 
    pregunta: "¿Qué es variable?", 
    respuesta: "Espacio de memoria utilizado para almacenar valores en un programa" 
  },

  { id: 69,
    categoria: "Javascript", 
    pregunta: "¿Qué es constante?", 
    respuesta: "Valor fijo que no puede ser modificado durante la ejecución de un programa" 
  },

  { id: 70,
    categoria: "Javascript", 
    pregunta: "¿Qué es ámbito de las variables?", 
    respuesta: "Parte del programa en la que la variable es visible y puede ser utilizada" 
  },

  { id: 71,
    categoria: "Javascript", 
    pregunta: "¿Qué es modo estricto?", 
    respuesta: "Característica de JavaScript que permite escribir código más seguro y evitar errores comunes" 
  },

  { id: 72,
    categoria: "Javascript", 
    pregunta: "¿Qué es tipos de dato primitivos?", 
    respuesta: "Tipos básicos de datos que están disponibles en un lenguaje de programación" 
  },

  { id: 73,
    categoria: "Javascript", 
    pregunta: "¿Qué es operador typeof?", 
    respuesta: "Operador en JavaScript que se utiliza para obtener el tipo de datos de una variable o expresión" 
  },

  { id: 74,
    categoria: "Javascript", 
    pregunta: "¿Qué es conversión de tipos?", 
    respuesta: "Proceso de cambiar el tipo de datos de una variable a otro tipo de datos" 
  },

  { id: 75,
    categoria: "Javascript", 
    pregunta: "¿Qué son los operadores?", 
    respuesta: "Símbolos o palabras clave que se utilizan en programación para realizar operaciones" 
  },

  { id: 76,
    categoria: "Javascript", 
    pregunta: "¿Qué es control de flujo?", 
    respuesta: "Estructuras que permiten al programador tomar decisiones" 
  },

  { id: 77,
    categoria: "Javascript", 
    pregunta: "¿Qué son estructuras de control?", 
    respuesta: "Bloques de código que permiten iterar acciones para controlar el flujo de ejecución de un programa" 
  },

  { id: 78,
    categoria: "Javascript", 
    pregunta: "¿Qué es \"Truthy\" y \"Falsy\"?", 
    respuesta: "valores que son considerados como verdaderos o falsos en un contexto booleano" 
  },

  { id: 79,
    categoria: "Javascript", 
    pregunta: "¿Qué es una estructura de datos?", 
    respuesta: "Forma de organizar y almacenar datos en una computadora de manera eficiente" 
  },

  { id: 80,
    categoria: "Javascript", 
    pregunta: "¿Qué es un arreglo?", 
    respuesta: "Estructura de datos que permite almacenar una colección ordenada de elementos" 
  },

  { id: 81,
    categoria: "Javascript", 
    pregunta: "¿Qué es un objeto?", 
    respuesta: "Unidad dentro de un programa, que tiene un estado (atributos) y un comportamiento (métodos)" 
  },

  { id: 82,
    categoria: "Javascript", 
    pregunta: "¿Qué es operador instanceof?", 
    respuesta: "Es una palabra clave, que permite verificar si un objeto pertenece a una clase determinada" 
  },

  { id: 83,
    categoria: "Javascript", 
    pregunta: "¿Qué es una función?", 
    respuesta: "Bloque de código reutilizable que realiza una tarea específica" 
  },

  { id: 84,
    categoria: "Javascript", 
    pregunta: "¿Qué es un parámetro?", 
    respuesta: " variable en la declaración de un método" 
  },

  { id: 85,
    categoria: "Javascript", 
    pregunta: "¿Qué es un argumento?", 
    respuesta: "Valor que se envía a una función cuando se llama" 
  },

  { id: 86,
    categoria: "Javascript", 
    pregunta: "¿Qué es retorno?", 
    respuesta: "Valor que una función devuelve como resultado después de realizar sus operaciones" 
  },

  { id: 87,
    categoria: "Javascript", 
    pregunta: "¿Qué es hoisting?", 
    respuesta: "Comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven automáticamente al principio de su scope" 
  },

  { id: 88,
    categoria: "Javascript", 
    pregunta: "¿Qué es \"This\"?", 
    respuesta: "Palabra clave en JavaScript que se refiere al objeto actual en el contexto en el que se encuentra" 
  },

  { id: 89,
    categoria: "Javascript", 
    pregunta: "¿Qué es Scope?", 
    respuesta: "Ambito dónde se pueden utilizar y acceder a las variables y funciones en un programa" 
  },

  { id: 90,
    categoria: "Javascript", 
    pregunta: "¿Qué es destructurar?", 
    respuesta: "Característica que permite extraer valores de objetos o arreglos en variables individuales" 
  },

  { id: 91,
    categoria: "Javascript", 
    pregunta: "¿Qué es rest argument?", 
    respuesta: "Característica en JavaScript que permite capturar un número variable de argumentos pasados a una función" 
  },

  { id: 92,
    categoria: "Javascript", 
    pregunta: "¿Qué es operador Spread?", 
    respuesta: " Se denota '...', y se usa para expandir elementos de una estructura de datos donde múltiples valores son esperados" 
  },

  { id: 93,
    categoria: "Javascript", 
    pregunta: "¿Qué es sincrónico?", 
    respuesta: " Ejecución de tareas de manera secuencial y en orden" 
  },

  { id: 94,
    categoria: "Javascript", 
    pregunta: "¿Qué es asíncrono?", 
    respuesta: "Ejecución de tareas donde no se tiene que esperar a que una tarea termine para comenzar la siguiente" 
  },

  { id: 95,
    categoria: "Javascript", 
    pregunta: "¿Qué es promesa?", 
    respuesta: " Objeto en JavaScript que puede no estar disponible de inmediato, pero que estará disponible en el futuro" 
  },

  { id: 96,
    categoria: "Javascript", 
    pregunta: "¿Qué es manejo de errores?", 
    respuesta: "Forma en que un programa gestiona las excepciones o problemas que pueden ocurrir durante la ejecución" 
  },

  { id: 97,
    categoria: "Javascript", 
    pregunta: "¿Qué es API?", 
    respuesta: "Conjunto de reglas y protocolos que permiten que diferentes aplicaciones de software se comuniquen entre sí" 
  },

  { id: 98,
    categoria: "Javascript", 
    pregunta: "¿Qué es web APIs?", 
    respuesta: "Interfaz de procesamiento de aplicaciones entre un servidor web y un navegador web" 
  },

  { id: 99,
    categoria: "Javascript", 
    pregunta: "¿Qué es evento?", 
    respuesta: "Acción o suceso que ocurre en el navegador, como hacer clic en un botón o mover el mouse" 
  },

  { id: 100,
    categoria: "Javascript", 
    pregunta: "¿Qué es IIFE?", 
    respuesta: " 'Immediately Invoked Function Expression'. Es una función en JavaScript que se declara y se ejecuta inmediatamente después de su definición" 
  },

  { id: 101,
    categoria: "Javascript", 
    pregunta: "¿Qué es JSON?", 
    respuesta: "Formato de texto sencillo para el intercambio de datos." 
  },

  { id: 102,
    categoria: "Javascript", 
    pregunta: "¿Qué es web storage API?", 
    respuesta: "API en JavaScript que permite almacenar datos de manera persistente en el navegador del usuario" 
  },

  { id: 103,
    categoria: "Javascript", 
    pregunta: "¿Qué es modularización?", 
    respuesta: "Se refiere al enfoque de dividir un programa o proyecto en módulos más pequeños e independientes" 
  }
  
];

export {preguntas};