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
