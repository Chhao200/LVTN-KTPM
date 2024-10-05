const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required: true, unique: true},
            amount: { type: String, required: true},
            image: { type: String, required: true},
            price: { type: Number,default: false, required: true},
            product: {type: mongoose.Schema.Types.ObjectId,ref: 'Product',required: true},
        },
    ],
    shippingAddress:{
        fullName: {type: String, require: true},
        address: {type: String, require: true},
        city: {type: String, require: true},
        phone: {type: Number, require: true},
    },
    paymentMethod: {type: String, require: true},
    itemsPrice: {type: Number, require: true},
    shippingPrice: {type: Number, require: true},
    taxPrice: {type: Number, require: true},
    totalPrice: {type: Number, require: true},
    user: {type: String, require: true},
    isPaid: {type: mongoose.Schema.Types.ObjectId , ref: 'User', require: true},
    paidAt: {type: String, require: true},
    isDelivered: {type: String, require: true},
    deliveredAt: {type: Number, require: true},
},
{
    timestamps: true,
}
);
const Order = mongoose.model("User",orderSchema);
module.exports = Order;