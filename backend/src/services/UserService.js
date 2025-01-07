const User = require("../models/UserModel");
const { genneralAccessToken, genneralRefreshToken } = require("./jwServices");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { email, password, confirmPassword } = newUser;
    try {
      // Kiểm tra xem email đã tồn tại hay chưa
      const checkUser = await User.findOne({ email: email });
      if (checkUser !== null) {
        return resolve({
          status: "ERR",
          message: "Email đã được sử dụng",
        });
      }

      // Kiểm tra mật khẩu và confirmPassword có khớp không
      if (password !== confirmPassword) {
        return resolve({
          status: "ERR",
          message: "Mật khẩu không khớp",
        });
      }

      // Tạo người dùng mới với chỉ email và mật khẩu
      const createdUser = await User.create({
        email,
        password,
        confirmPassword, // Chỉ lưu mật khẩu và email trong giai đoạn này
      });

      // Nếu tạo thành công
      if (createdUser) {
        resolve({
          status: "OK",
          message: "Đăng ký thành công, vui lòng cập nhật thông tin sau.",
          data: createdUser,  // Trả về dữ liệu người dùng mới
        });
      }
    } catch (e) {
      reject({
        status: "ERR",
        message: "Đã xảy ra lỗi khi tạo người dùng",
        error: e.message,
      });
    }
  });
};


const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;
    try {
      const checkUser = await User.findOne({ email: email });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "Email không tồn tại",
        });
      }
      if (password != checkUser.password) {
        resolve({
          status: "ERR",
          message: "Mật khẩu không chính xác",
        });
      }
      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      resolve({
        status: "OK",
        message: "SUCCESS ",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });

      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "the user is not defined",
        });
      }
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "SUCCESS ",
        data: updateUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });

      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "the user is not defined",
        });
      }
      await User.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete user SUCCESS ",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Truy vấn tất cả người dùng và sắp xếp theo _id giảm dần
      const allUser = await User.find().sort({ _id: -1 });

      resolve({
        status: "OK",
        message: "List all users",
        data: allUser,
      });
    } catch (e) {
      reject({
        status: "ERR",
        message: "Đã xảy ra lỗi khi lấy danh sách người dùng",
        error: e.message,
      });
    }
  });
};


const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: id });
      if (user === null) {
        resolve({
          status: "ERR",
          message: "the user is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: user,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const refreshTokenService = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("token", token);
      resolve({
        status: "OK",
        message: "SUCCESS",
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  refreshTokenService,
};
