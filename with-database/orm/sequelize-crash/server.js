
import { DataTypes, Sequelize } from "sequelize";


const databaseConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,

}

// console.log(databaseConfig);


const sequelize = new Sequelize(
    databaseConfig.database,
    databaseConfig.username,
    databaseConfig.password, {
    host: databaseConfig.host,
    dialect: "postgres",
    port: databaseConfig.port
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Todo = sequelize.define(
    'Todo', {
    // 在这里定义模型属性
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    },
    content: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    },
    tag: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    },

}, {
    // 这是其他模型参数
    tableName: 'todo',
    createdAt: false,
    updatedAt: false


});

const todos = await Todo.findAll();
console.log(JSON.stringify(todos, null, 2));
