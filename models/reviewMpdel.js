module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
    title: {
    type: DataTypes.STRING,
    allowNull: false I
    },
    price: {
    type: DataTypes.INTEGER
    },
    description: {
    type: DataTypes.TEXT
    },
    published: {
    type: DataTypes.BOOLEAN
    }
    
    })
    
    return Product
    
    }