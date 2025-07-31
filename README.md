Alcance del proyecto
Este proyecto se centra exclusivamente en el Frontend.
No incluye lógica de backend ni base de datos, por lo que la evaluación debe realizarse únicamente sobre la implementación en Angular, sus buenas prácticas, estructura de componentes y calidad del código.

es poisbles que los endpoint fallen porque no soy tan experto pero pedes recargar la pagina

Este proyecto es una aplicación frontend en Angular que permite a un usuario:

Registrarse y crear una cuenta.

Iniciar sesión con credenciales de usuario.

Seleccionar materias (máximo 3) y ver información de profesores y otros estudiantes.

Proteger rutas sensibles usando Guards para mayor seguridad.


Características principales
Registro e inicio de sesión
Los usuarios deben crear una cuenta proporcionando correo electrónico y contraseña.

Una vez registrado, el usuario puede iniciar sesión y acceder a la vista protegida /home.

Seguridad con Guards
Se implementa un AuthGuard que:

Bloquea el acceso a rutas protegidas si no existe un token de autenticación.

Redirige al usuario al /login si intenta acceder sin iniciar sesión.

Mejora la protección de la aplicación asegurando que solo usuarios autenticados puedan navegar en áreas privadas.

Selección de materias
El usuario puede seleccionar hasta 3 cursos de una lista disponible.

Validación para:

No repetir materias del mismo profesor.

Mostrar el nombre del usuario y los demás estudiantes que comparten clase.

Uso de CSS y estilos(proposito)
La aplicación está diseñada siguiendo buenas prácticas de estilos:

CSS en cascada: estilos globales aplicados a toda la aplicación.

Cascada anidada: estructura jerárquica para componentes con SCSS (mejor legibilidad).

Metodología BEM: convenciones de nombres de clases (bloque__elemento--modificador) para mantener el código limpio y escalable.

Tipado en TypeScript
Se utilizan interfaces y tipos estrictos para mejorar la seguridad y calidad del código:


Buenas prácticas
Separación de responsabilidades:
Servicios (AuthService, SubjectService) para manejar API y lógica de autenticación.

Uso de Guards:
Seguridad implementada a nivel de rutas para controlar acceso.

Validaciones en frontend:
Límite de selección de cursos, verificación de profesor duplicado.

Tipado estricto:
Interfaces y types en todo el proyecto.

Estructura modular:
Componentes reutilizables (CourseTable, ListOfClasses, CourseSelection).

Metodología BEM en CSS:
Código escalable y mantenible.

Resumen
Registro → Inicio de sesión → Selección de materias → Guard para rutas seguras.

Buenas prácticas en seguridad, CSS, tipado y arquitectura.

Proyecto solo Frontend, evaluable por calidad de implementación y organización.