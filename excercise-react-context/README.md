# Excersice react context - countries 馃實

En este ejercicio tendr谩s que crear una aplicaci贸n en React que permita listar todas las naciones que nos devuelve la API de restcountries.eu.

Esta aplicaci贸n va a tener dos p谩ginas: El index `/` y el detalle de una naci贸n en `/details/:id`

Las informaciones tendr谩n que ser guardadas y compartidas con el React context

Instalar las dependencias con `npm i`

- Crear un servicio y un custom hook para hacer peticiones a 馃憠 `https://restcountries.eu/rest/v2/all`
- Crear un `context` donde guardar la respuesta de la petici贸n
- Crear una p谩gina index en el path `/` donde vamos a listar todas las naciones que hemos conseguido con la petici贸n, en la lista hay que mostrar el `name` de la naci贸n y `flag`
- Crear una p谩gina `/details/:id` que se mosrtar谩 al hacer click en una naci贸n de la lista, estos son los detalles que hay que mostrar: `name`, `flag`, `capital`, `region`, `languages` and `currencies`
  
