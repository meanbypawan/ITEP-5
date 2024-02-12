import sequelize from "../db/dbConfig.js";

const CartItems = sequelize.define("cartItem",{});

export default CartItems;