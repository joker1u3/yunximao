'use strict';
let bcrypt = require('bcryptjs');
let crypto = require('crypto');
let crispy = require('crispy-string');

module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1
    },
    account: DataTypes.STRING,
    name: {
      type: DataTypes.STRING
      // ,
      // validate: {
      //   isHanzi: function (val) {
      //     let role_list = ['member', 'r_meber'];
      //     if (role_list.indexOf(this.role) >= 0 || !this.role) {
      //       let matched = val.match(/[\u4e00-\u9fa5]{2}/);
      //       if (!matched || val.length != 2) throw new Error("昵称必须是两个汉字");
      //     }
      //   }
      // }
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: '/images/avatar/1.jpg'
    },
    password: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
        this.setDataValue('password', val);
        this.setDataValue('password_digest', this.digest(val));
      },
      validate: {
        isLongEnough: function (val) {
          if (val.length < 6) {
            throw new Error("密码长度至少为6位");
          }
        }
      }
    },
    password_confirmation: {
      type: DataTypes.VIRTUAL,
      validate: {
        equalsPassword: function (val) {
          if (val) {
            if (val != this.password) {
              throw new Error("两次输入的密码不一致");
            }
          }
        }
      }
    },
    password_digest: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'member'
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: function (val) {
          let reg = new RegExp(/[\w+\-. ]+@[a-z\d\-.]+\.[a-zA-Z]+/);
          if (!reg.test(val)) {
            throw new Error('Email 格式不正确');
          }
        }
      }
    },
    mobile: DataTypes.STRING,
    salt: {
      type: DataTypes.CHAR(8),
      defaultValue: crispy.base62String(8)
    },
    token: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
        this.setDataValue('token', val); // Remember to set the data value, otherwise it won't be validated
        this.setDataValue('token_digest', this.digest(val));
      }
    },
    token_digest: DataTypes.STRING,
    token_expired_at: DataTypes.DATE,
    valid: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {

      }
    },
    instanceMethods: {

    }
  });

  users.associate = function (models) {
    // users.hasMany(models.articles, {
    //   foreignKey: 'creator_id',
    //   targetKey: 'id'
    // });

    // users.belongsToMany(models.users, {
    //   through: models.relationships,
    //   foreignKey: 'followed_id',
    //   targetKey: 'id',
    //   as: 'followers'
    // });
  }

  users.prototype.digest = function (pwd) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(this.digest_md5(pwd), salt);
    return hash;
  };

  users.prototype.digest_md5 = function (pwd) {
    var md5 = crypto.createHash('md5');
    var tmp = pwd + this.salt;
    return md5.update(tmp).digest('hex');
  };

  users.prototype.md5 = function (pwd) {
    var md5 = crypto.createHash('md5');
    var md5_2 = crypto.createHash('md5');
    var tmp = md5.update(pwd).digest('hex') + this.salt;
    return md5_2.update(tmp).digest('hex');
  };

  users.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password_digest);
  };

  return users;
};