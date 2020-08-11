module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define(
        'groups', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING
            },
            avatar: {
                type: DataTypes.STRING
            }
        },
        {
            timestamps: false
        }
    )
    Group.associate = (models) => {
        Group.hasMany(models.chat_boxes, {
            foreignKey: 'group_id'
        })
        Group.hasMany(models.chat_messages, {
            foreignKey: 'group_id'
        })
    }
    return Group
}