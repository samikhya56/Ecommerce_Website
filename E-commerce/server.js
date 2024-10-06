// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// User schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Product schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

// Order schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: Array,
    status: String
});

// Models
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);

// Registration route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.send('User registered!');
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user._id }, 'jwtSecretKey');
    res.header('auth-token', token).send(token);
});

// Add product (admin)
app.post('/admin/product', async (req, res) => {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    await product.save();
    res.send('Product added');
});

// View products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// Place order
app.post('/order', async (req, res) => {
    const { userId, products } = req.body;
    const order = new Order({ user: userId, products, status: 'Pending' });
    await order.save();
    res.send('Order placed');
});

// View orders (admin)
app.get('/admin/orders', async (req, res) => {
    const orders = await Order.find().populate('user');
    res.send(orders);
});

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
