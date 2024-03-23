# manos-que-hablan-backend

Este es el repositorio Backend de la página Manos que Hablan.

-Crear base de datos en PostgreSQL:
CREATE DATABASE "manos-que-hablan";

Versión de Node usada v18.17.1

## Seedeo de la base de datos

Actualmente el seed se encuentra listo para los siguientes modelos: 
- [x] Student (tabla de estudiantes)
- [x] Courses (tabla de cursos)
- [x] StudentByCourse (tabla que une el id de un estudiante con el id de los cursos en los que participó)
- [x] Payments (tabla de pagos)

Para correr el seedeo de la base de datos, se debe seguir el siguiente proceso:

1) Se deben descargar los archivos del siguiente repositorio: https://github.com/NataPeralta/ManosQueHablan-data . Deberian obtener 3 archivos .js (students, payments y studentsResults) y 2 carpetas (students y payments)

2) Crear una carpeta llamada 'data' dentro de la carpeta 'seed' del proyecto, y copiar todo lo descargado en el paso 1 dentro de 'data'.

3) Correr un npm install por si nos llegase a faltar alguna dependencia.

4) Estando en la carpeta /seed, correr el siguiente comando:
```bash
node index.js
```

5) El proceso tardara unos segundos y deberia finalizar. Se puede revisar con algun adminstrador de base de datos (como pgAdmin) que el seedeo se haya realizado.




