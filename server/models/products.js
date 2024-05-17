module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("products", {
        Name:{
            type: DataTypes.STRING,
            allowNULL: false
        },
        Price:{
            type: DataTypes.NUMBER,
            allowNULL: false
        },
        Category:{
            type: DataTypes.STRING,
            allowNULL: false
        },
        image_link:{
            type: DataTypes.STRING,
            allowNULL: true
        },
    },{
        timestamps: false
    })
    return products;
    
}
