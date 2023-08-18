import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title not defined'],
        },
        price: {
            type: Number,
            min: 0,
            required: [true, 'price not defined'],
        },

        urlProduct: {
            type: String,
            isUrl: true,
            required: [true, 'url product not defined'],
        },
        urlThumb: {
            type: String,
            isUrl: true,
            required: [true, 'url thumbnail not defined'],
        },

        videoId: {
            type: mongoose.ObjectId,
            ref: 'Video',
            required: [true, 'video id not defined'],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
