"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "100",
          publicId: "0e7f89e3-cd70-4c61-8f66-ffe5c7cad2c3",
          name: "Admin 123",
          isAdmin: true,
          username: "admin123",
          password: "admin123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
