const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const routes = require('./src/routes/index');
const User = require('./src/models/UserModel'); // Import User model
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Add cookie-parser

routes(app);

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Kiểm tra dữ liệu trong collection User
    const users = await User.find();
    console.log("Danh sách người dùng:", users); 
  })
  .catch(err => {
    console.error('Connect db fail:', err); // Log chi tiết lỗi MongoDB
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const newUser = new User({
//   name: "John Doe",
//   email: "john.doe@example.com",
//   password: "123456",
//   isAdmin: false,
//   phone: 1234567890,
//   access_token: "dummy_access_token",
//   refresh_token: "dummy_refresh_token",
// });

// newUser.save()
//   .then(() => console.log("Người dùng mới đã được thêm"))
//   .catch((err) => console.error("Lỗi khi thêm người dùng:", err));
