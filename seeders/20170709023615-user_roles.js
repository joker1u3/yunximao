'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    let data = [{
        id: 1,
        name: 'system',
        text: '系统',
        description: '系统内部使用',
        created_at: '2015-01-01',
        updated_at: '2015-01-01'
      }, {
        id: 2,
        name: 'member',
        text: '会员',
        description: '注册会员',
        created_at: '2015-01-01',
        updated_at: '2015-01-01'
      }, {
        id: 3,
        name: 'admin',
        text: '管理员',
        description: '管理员',
        created_at: '2015-01-01',
        updated_at: '2015-01-01'
      }, {
        id: 4,
        name: 'super_admin',
        text: '超级管理员',
        description: '超级管理员',
        created_at: '2015-01-01',
        updated_at: '2015-01-01'
      }
    ];
    return queryInterface.bulkInsert('user_roles', data, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_roles', {
      id: {
        $in: [1, 2, 3, 4]
      }
    }, {});
  }
};