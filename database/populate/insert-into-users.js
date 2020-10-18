const sequelize = require('../db');
const User = require('../models/User');

const user1 = {
    id: 1,
    name: 'Igor Sicorschi',
    description: 'Main universe rol'
};

const users = [
    {
        id: 1,
        name: 'Igor Sicorschi',
        description: 'Main universe rol'
    },
    {
        id: 2,
        name: 'Roman Kovalenko',
        description: 'Russian soviet cooker'
    },
    {
        id: 3,
        name: 'Angela Hankmouth',
        description: 'King Arthur secret daughter'
    },
    {
        id: 4,
        name: 'Karim Kolumno',
        description: 'Ayudante del fisio de real alcala'
    },
    {
        id: 5,
        name: 'Volea Bratislava',
        description: 'Mujer agonica sin pechos'
    },
    {
        id: 6,
        name: 'Dante',
        description: 'Perro guardian del cenicero infinito'
    },
    {
        id: 7,
        name: 'Quinn Xiang',
        description: 'Emperador brasileño de la conquista de Colon'
    },
    {
        id: 8,
        name: 'Cuadrupeto Martinez',
        description: 'Mediohumano nacido con 4 patas'
    },
    {
        id: 9,
        name: 'Alfonso Peluña Puscual',
        description: 'Dueño de una fabrica lechera en Sahara'
    },
    {
        id: 10,
        name: 'Brad King Kimblee',
        description: 'Luchador profesional de la prestigiosa escuela Art Attack'
    }
];

async function insertIntoUsers(users) {
    const promiseInsert = [];
    users.forEach(user => promiseInsert.push(insert(user)));
    await Promise.all(promiseInsert);
    console.log(`All users array inserted in db`)
}

function insert(user) {
    return User.build(user).save();
}

insertIntoUsers(users);