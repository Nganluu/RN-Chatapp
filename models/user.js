module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING,
            }
        },
        {
            timestamps: false
        }
    )
    User.associate = (models) =>{
        User.hasMany(models.chat_boxes, {
            foreignKey: 'user_id'
        })
        User.hasMany(models.chat_messages, {
            foreignKey: 'user_id'
        })
    }
    return User
}