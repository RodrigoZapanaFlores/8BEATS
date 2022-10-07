require('../config/db.config');

const Beat = require("../models/beat.model");
const { faker } = require("@faker-js/faker");

Beat.deleteMany({})
.then(() => {
  for (let i = 0; i < 20; i++) {

     // TODO: añadir caracteristicas del modelo para evitar error, cambiar modelo de beatmodel.js---bpm machine
    Beat.create({
      title: faker.music.songName(),
      description: faker.lorem.paragraph(),
      author: faker.internet.userName(),
      url: faker.internet.url(),
      views: Math.floor(Math.random() * 10000),
      category: faker.music.genre(),
      duration: Math.floor(Math.random() * 200),
      thumbnail: faker.image.abstract(undefined, undefined, true),
      private: Math.random() < 0.8,
    }).then((beat) => {
      console.log(`beat ${beat.title} created`);

      // TODO: create relations
    });
  }
})
.catch((err) => {
  console.error(err);
});