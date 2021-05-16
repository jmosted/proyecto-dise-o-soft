import {Model} from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Task.init(
        {
            tittle: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            event_id: DataTypes.INTEGER,
            time: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Task",
        }
    );
    return Task;
};
