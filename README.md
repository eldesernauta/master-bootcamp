<!-- HEADER -->
<br />
<p>
  <h3>Master Bootcamp</h3>
    <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" style="width:30px; margin: auto;">
  <p>
    API Rest usando Node.js, Docker y MongoDB
    -->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Tabla de Contenidos</h2></summary>
  <ol>
    <li><a href="#instalacion-del-ide">Instalación del IDE</a></li>
    <li><a href="#github">Cuenta de GitHub</a></li>      
    <li><a href="#repositorio">Repositorio</a></li>
    <li><a href="#docker-y-mongodb">Instalación y despliegue de Docker y MongoDB</a></li>
    <li><a href="#api-nodejs">API Node.js</a></li>
  </ol>
</details>

<!-- IDE Installation -->

## Instalación del IDE

Ejercicio realizado con Visual Studio Code.

### Tecnologías:

- [NodeJS](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Docker](https://docker.com/)
- [MongoDB](https://mongodb.com/)

<!-- GitHub -->

## GitHub

Ya contaba con una cuenta con la cual vengo trabajando desde hace un tiempo.<br>
<a href="https://github.com/eldesernauta" target="_blank">@eldesernauta</a>

<!-- Repository -->

## Repositorio

Ruta a este repositorio:
<a href="https://github.com/eldesernauta/master-bootcamp" target="_blank">https://github.com/eldesernauta/master-bootcamp</a>

<!-- docker-mongo -->

## Docker y MongoDB

El proyecto se despliega en un contenedor Docker en el que están incluídas las imágenes de la API en Node.js y la base de datos en MongoDB.

Para desplegar el contenedor es necesario correr los siguientes comandos:

<ol>
    <li>$ docker-compose build</li>
    <li>$ docker-compose up</li>   
</ol>

En Linux:
<ol>
    <li>$ <span style="color:yellow">sudo</span> docker-compose build</li>
    <li>$ <span style="color:yellow">sudo</span> docker-compose build</li>   
</ol>

<!-- api-node.js -->

## API Node.js

Documentación de la API:

Esta API cuenta con 4 métodos conocidos como CRUD y tras desplegar en Docker corre en el puerto 3000 en la ruta /documents:

<ol>
    <li>GET: http://localhost:3000/documents para obtener todos los documentos</li>
    <li>GET: http://localhost:3000/documents/#id para obtener un documento por su ID</li>
    <li>POST: http://localhost:3000/documents/agregar para añadir un nuevo documento</li>
    <li>PUT: http://localhost:3000/documents/update/#id para obtener y actualizar un documento por su ID</li>
    <li>DELETE: http://localhost:3000/documents/#id para remover un documento por su ID</li>
</ol>

