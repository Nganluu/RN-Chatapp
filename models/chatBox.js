module.exports = (sequelize, DataTypes) => {
    const ChatBox = sequelize.define(
        'chat_boxes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
    ChatBox.associate = (models) => {
        ChatBox.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
        ChatBox.belongsTo(models.groups, {
            foreignKey: 'group_id'
        })
    }
    return ChatBox
}