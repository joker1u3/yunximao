'use strict';
let ctx = require('../models');
module.exports = {
  up: function (queryInterface, Sequelize) {
    let users = [{
      id: '00007fc0-6eb8-11e7-8e75-0b631325fe0f',
      account: 'root',
      name: '系统管理员',
      role: '1',
      avatar: '/images/avatar/1.jpg',
      email: 'root@yxm.com',
      password: '123456',
      password_confirmation: '123456'
    }, {
      id: '0001e890-6db6-11e7-a4d5-3d3a55f920be',
      account: 'yxm_admin',
      name: '云吸猫',
      role: '1',
      avatar: '/images/avatar/2.jpg',
      email: 'admin@yxm.com',
      password: '123456',
      password_confirmation: '123456'
    }];
    let data = [];
    for (let user of users) {
      let obj = ctx.users.build(user);
      obj.toJSON();
      data.push({
        id: obj.id,
        account: obj.account,
        name: obj.name,
        avatar: obj.avatar,
        email: obj.email,
        role: obj.role,
        salt: obj.salt,
        valid: obj.valid,
        created_at: '2015-01-01',
        updated_at: '2015-01-01',
        password_digest: obj.password_digest
      });
    }

    return queryInterface.bulkInsert('users', data, {}).catch(function (e) {
      console.log(e.message);
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:  let types = [];

      return queryInterface.bulkDelete('types', null, {});
    */
    return queryInterface.bulkDelete('users', {
      id: {
        $in: [
          '00007fc0-6eb8-11e7-8e75-0b631325fe0f',
          '0001e890-6db6-11e7-a4d5-3d3a55f920be'
        ]
      }
    }, {});
  }
};