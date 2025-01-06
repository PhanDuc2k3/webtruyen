const mongoose = require('mongoose');

// Định nghĩa Schema cho Story
const storySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },          // Tiêu đề truyện, bắt buộc
        author: { type: String, required: true },         // Tác giả truyện, bắt buộc
        genres: { type: [String], required: true },       // Thể loại truyện (danh sách thể loại)
        status: {                                         // Trạng thái truyện
            type: String,
            enum: ['ongoing', 'completed'],               // Chỉ chấp nhận "ongoing" hoặc "completed"
            default: 'ongoing',
        },
        description: { type: String, required: true },    // Mô tả truyện, bắt buộc
        coverImage: { type: String },                     // URL ảnh bìa truyện
        views: { type: Number, default: 0 },              // Lượt xem
        likes: { type: Number, default: 0 },              // Lượt thích
        createdAt: { type: Date, default: Date.now },     // Thời gian tạo
        updatedAt: { type: Date, default: Date.now },     // Thời gian cập nhật (cập nhật tự động)
    },
    {
        timestamps: true,                                 // Tự động thêm trường createdAt và updatedAt
    }
);

// Tạo Model từ Schema
const Story = mongoose.model('Story', storySchema);

// Xuất Model
module.exports = Story;
