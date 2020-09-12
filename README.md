# NodePop

# Table of Contents
1. [Requisitos de la practica](#req)
2. [Documentación del Código](#doc)

## Requisitos de la practica <a name="req"></a> 
  
  Aquí describiremos cómo se han ido completando los diferentes requisitos que se planteaban en la práctica.  
  
### [API] Lista de anuncios con posibilidad de paginación:  

El filtro por parametros se hace dinámico. Pasando la consulta directamente a la base de datos con la clave y valor que se proporciona. Excepto para las claves reservadas: limit, skip, sort y fields.

- Todos  
http://localhost:3001/api/ads  

- Con paginación (de 2 en 2):  
http://localhost:3001/api/ads?skip=2&limit=2
  
- Por Nombre de Articulo:  
http://localhost:3001/api/ads?name=Avocado%20Half  
  
- Por precio fijo:  
http://localhost:3001/api/ads?price=1.95  
  
- Por varios parametros:  
http://localhost:3001/api/ads?price=1.95&name=Hardly%20used%20shocks  

### [API] Lista de tags existentes:  
  
  En desarrollo...  
  
### [API] Crear anuncio
  
  En desarrollo...  
  
### Pagina front-end con posibilidad de filtrar:

- Front-end list all Advertisements:  
http://localhost:3001  
  
- Front-end filter by Author:  
http://localhost:3001/author/Paras 

## Documentación <a name="doc"></a>  
  
  Aquí se redacta la documentación del cógigo  
  
### Inicializar la Base de Datos
  
  Para inicializar la base de datos se debe hacer uso del script *bd-init.js* lo cual cargará los siguientes anuncios de muestra:  
  
    { name: 'Hardly used shocks',  
      description: 'Sellign this shocks as I do not know how to wash them. I only used for a 3h walk',  
      price: 1.95,  
      author: 'Smith',  
      selling: true,  
      tags: ['lifestyle', 'work', 'mobile'] },  
        
    { name: 'Secon-hand hand',  
      description: 'I was born with three hands, I am selling one, I hardly used it so it is as good as new.',   
      price: 450.00,   
      author: 'Charles',   
      selling: true,  
      tags: ['lifestyle'] },  
        
    { name: 'Big Red Car',  
      description: 'I need a car. Should be red and big.' ,  
      price: 4600.00,  
      author: 'Vany',  
      selling: false,  
      tags: ['motor', 'lifestyle'] },  
        
    { name: 'Tambourine Clasess',  
      description: 'I can teach you how to play the tambourine in a few weeks of hard and thrilling work. Price per hour.',  
      price: 12.00,  
      author: 'Paras',  
      selling: true,  
      tags: ['lifestyle'] },  
        
    { name: 'Keyboard',  
      description: 'Selling this keyboard as it is useless for me. Cumputer keeps asking to \'Press ANY key\' but this keyboard has no ANY key. Only buy if you do not need ANY key.',  
      price: 9.50,  
      author: 'Camile',  
      selling: true,  
      tags: ['mobile'] },  
        
    { name: 'Avocado Half',  
      description: 'Everyone talking about avocados. "They are so delicious" they said... I tasted half but It has awful taste... Selling the other half. Avocado pit included.',   
      price: 1.32,  
      author: 'Ivory',  
      selling: true,  
      tags: ['lifestyle'] }  
