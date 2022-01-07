//Pagina inicial: deben armar una landing page con

//[ ] Alguna imagen de fondo representativa al proyecto
//[ ] Botón para ingresar al home (Ruta principal)
//Ruta principal: debe contener

//[ ] Input de búsqueda para encontrar razas de perros por nombre
//[ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
//Imagen
//Nombre
//Temperamento
/* Peso
[ ] Botones/Opciones para filtrar por:
Temperamento
Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
Orden alfabético
Peso
//[ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.
//IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas desde la API como así también las de la base de datos, pero NO está permitido almacenar en la base de datos las razas de perros de la API sino que solamente se pueden guardar aquellas creadas desde el form.

//R/uta de detalle de raza de perro: debe contener

//[ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
//[ ] Altura
//[ ] Peso
//[ ] Años de vida
//Ruta de creación de raza de perro: debe contener

[ ] Un formulario controlado con JavaScript con los siguientes campos:
//Nombre
//Altura (Diferenciar entre altura mínima y máxima)
//Peso (Diferenciar entre peso mínimo y máximo)
//Años de vida
//[ ] Posibilidad de seleccionar/agregar uno o más temperamentos
//[ ] Botón/Opción para crear una nueva raza de perro
//Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la raza no pueda contener números o símbolos, que el peso/altura mínimo no pueda ser mayor al máximo y viceversa, etc.

//Base de datos
//El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

//[ ] Raza con las siguientes propiedades:
//ID *
//Nombre *
//Altura *
//Peso *
//Años de vida
//[ ] Temperamento con las siguientes propiedades:
ID
Nombre
La relación entre ambas entidades debe ser de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza pug es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

IMPORTANTE: Pensar como modelar los IDs de las razas de perros en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguna, esta puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API la raza Pug tiene id = 1 y en nuestra base de datos creamos una nueva raza Henry Pug con id = 1, ver la forma de diferenciarlas cuando querramos acceder al detalle de la misma.

Backend
Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

IMPORTANTE: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

[ ] GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado
[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
[ ] GET /temperament:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
Testing
[ ] Al menos tener un componente del frontend con sus tests respectivos
[ ] Al menos tener una ruta del backend con sus tests respectivos
[ ] Al menos tener un modelo de la base de datos con sus tests respectivos */