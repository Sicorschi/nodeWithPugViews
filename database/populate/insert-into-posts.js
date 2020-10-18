const sequelize = require('../db');
const Post = require('../models/Post');

const post1 = {
    id: 1,
    title: 'Freshnews: Sicorschi',
    description: 'Main universe rol'
};

const posts = [
    {
        id: 1,
        title: 'The fruits and veggie are bad for health',
        description: 'Recientes estuduios aprieban el uso de tabaco para el desayuno'
    },
    {
        id: 2,
        title: 'Se cae Felipe palo palo',
        description: 'Felipe 2, nuestro monarca y protector divino de cae de una escalera cuando intentaba tirarse por el otro lado'
    },
    {
        id: 3,
        title: 'Cae el gordo de la primitiva en la carcel de Soto del Real',
        description: 'Por primera vez en la historia el gordo de navidad cae en la prision estatal de la provincia alta'
    },
    {
        id: 4,
        title: 'Cambio Climatico, gran farsa',
        description: 'Nos tenian engañados todo el rato, y nosotros reciclando como estupidos'
    },
    {
        id: 5,
        title: 'Mariano Rajoy premio nobel de economia',
        description: 'Mariano y sus cuentas ganan el premio nobel de la institucion donde su cuñado es dueño',
        userId: 4
    },
    {
        id: 6,
        title: 'Foxxy el perro guarron la vuleve a liar',
        description: 'Por lo visto ofrecia sexo oral a cambio de queso'
    },
    {
        id: 7,
        title: 'Quinn Xiang visto acompañado de Xia Quinnang, esposa del primer ministro brasileño Raoul',
        description: 'Por lo visto follaban en el huerto del ministro',
        userId: 7
    },
    {
        id: 8,
        title: 'Fabrican gomas de cemento',
        description: 'Nuevo material para jugar con los niños, o jugar con los niños'
    },
    {
        id: 9,
        title: 'Haz tu propia industria porno',
        description: 'Se necesitan 20.000 euros, 400 gr de coca y una balanza'
    },
    {
        id: 10,
        title: 'Brad King, el nuevo campeon de ajedrez del ser',
        description: 'Famoso luchador gana un torneo de ajedrez del ser, entrenando solo con una mano',
        userId: 10
    }
];

async function insertIntoPosts(posts) {
    const promiseInsert = [];
    posts.forEach(post => promiseInsert.push(insert(post)));
    await Promise.all(promiseInsert);
    console.log(`All posts array inserted in db`);
}

function insert(post) {
    return Post.build(post).save();
}

insertIntoPosts(posts);