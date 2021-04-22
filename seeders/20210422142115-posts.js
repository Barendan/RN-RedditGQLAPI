"use strict";
const faker = require("faker");

const posts = [...Array(100)].map((posts) => ({
  title: faker.company.catchPhrase(),
  link: faker.internet.url(),
  imageUrl: "https://picsum.photos/600/600",
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", posts);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
