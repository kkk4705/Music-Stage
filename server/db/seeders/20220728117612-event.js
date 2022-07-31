module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      id_type: 1,
      name: 'IONOSFEAR FEST',
      info: 'Самый клёвый фест для тех, кто молод, но уже устал! Это туса именно для тебя, котечка-неудачник! Или снова дома будешь киснуть один? Выползай в Ионотеку, йоу! Двенадцать групп за 400₽, fuck yeah! Группы по кайфу, громко. Месиво на танцполе. Беспечность переходящая в беспредел. Напитки от сотки = нетрезвые знакомства. Россия, молодость, Ионотека! 0% занудства.',
      place_id: 1,
      date: '30.07.2022',
      link: 'https://vk.com/ionosfear_30_07_22',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
