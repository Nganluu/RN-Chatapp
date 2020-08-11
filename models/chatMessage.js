module.exports = (sequelize, DataTypes) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var dateTime = date+ ' ' + time;
    const ChatMessage = sequelize.define(
        'chat_messages', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            text: {
                type: DataTypes.TEXT
            },
            file: {
                type: DataTypes.TEXT
            },
            time: {
                type: DataTypes.DATE,
                defaultValue: dateTime
            }
        },
        {
            timestamps: false
        }
    )
    ChatMessage.associate= (models) =>{
        ChatMessage.belongsTo(models.groups, {
            foreignKey: 'group_id'
        })
        ChatMessage.belongsTo(models.users, {
            foreignKey: 'user_id'
        })
    }
    return ChatMessage;
}