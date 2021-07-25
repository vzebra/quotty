import rdsQuote from '@services/config'
import { DataTypes, Model } from 'sequelize'
import { v4 as uuid } from 'uuid'

const { UUIDV4, ARRAY, STRING, BOOLEAN, DATE } = DataTypes

class Quote extends Model {}

Quote.init(
  {
    id: {
      type: UUIDV4,
      allowNull: false,
      defaultValue: uuid(),
      primaryKey: true
    },
    author: {
      type: STRING
    },
    text: {
      type: STRING,
      allowNull: false
    },
    tags: {
      type: ARRAY(STRING),
      defaultValue: []
    },
    createdBy: {
      type: STRING
    },
    createdAt: {
      type: DATE
    },
    updatedAt: {
      type: DATE
    },
    isDeleted: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize: rdsQuote,
    modelName: 'quote',
    freezeTableName: true,
    timestamps: true
  }
)

export default Quote
