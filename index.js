const {ApolloServer, gql} = require ('apollo-server');
//schema : requiere de un typequery, se declaran las variales mediante el objeto curso y retorna en query
//podemos añadir y hacer muchos type como Curso. Tecnologia, etc
const typeDefs= gql`
    type Curso {
        titulo: String
    }

    type Tecnologia{ 
      tecnologia: String
    
    }
    type Query {
        obtenerCursos : [Curso]
        obtenerTecnologia : [Tecnologia]
    }


`;

const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    }, 
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];





//resolvers: satisfacen los schemas
//en la funcion obtenerCursos retornara lo que tiene el objeto cursos ya definido, retorna el valor de la posicion 0
//retorna: 
/*
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    */

//si quiero retornar todos los valores del objeto borro [0] y pongo cursos como esta y añado al 
//type Query donde retorna Curso, añadimos [Curso]    
const resolvers ={
    Query: {
        obtenerCursos: () => cursos, 
        obtenerTecnologia: () => cursos
        

        }
}


//servidor
//abrimos llaves y le pasamos el typeDefs y resolvers
const server= new ApolloServer({
    typeDefs,
    resolvers
});



//arrancar server
server.listen().then ( ({url}) => {
    console.log(`servidor listo en la URL ${url}`)
});

