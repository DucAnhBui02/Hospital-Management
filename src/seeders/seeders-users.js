"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "dbui83382@email.com",
        password: "123456",
        firstName: "Duc",
        lastName: "Anh",
        address: "VietNam",
        gender: 1,
        roleId: "R1",
        phoneNumber: "0866761287",
        positionId: "R2",
        image: "http",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
