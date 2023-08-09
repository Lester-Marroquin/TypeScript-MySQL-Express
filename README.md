## Aplicacion TypeScript con MySQL, Node.js, Express

Aplicacion de servidor de Express utilizando TypeScript y MySQL.

#### Instalar paquetes de npm
````
npm install
````

#### Instrucciones
Para utilizar la aplicación, abrir una ventana de consola e introducir:

````
nodemon dist/index
````
Esto para poder levantar el servidor local en: http://localhost:3000

Podemos consumir uno de los dos servicios que tiene con la URL:
>http://localhost:3000/heroes

El otro servicio es de obtener un dato por medio de un id:
>http://localhost:3000/heroes/1

Cabe mencionar algo muy importante que se debe de tener una base de datos creada con una tabla con los siguientes datos:

    CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
    USE `mydb` ;
    
    -- -----------------------------------------------------
    -- Table `mydb`.`heroes`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`heroes` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(50) NULL,
      `poder` VARCHAR(50) NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;

En caso de modificación de algun archivo .ts se debe de correr el comando:
````
tsc
````

o bien el comando:
````
npm run build
````
El cual creará dentro de la carpeta **dis/**  todos los archivos a su versión en JavaScript para que puedan correr en el servidor de Node.js con Express

