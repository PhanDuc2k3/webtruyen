import React from "react";
import "./MangaCard.scss"; // Import file CSS để tạo kiểu

const MangaCard = ({ imageUrl, children }) => {
  return (
    <div className="manga-card">
      {/* Phần ảnh */}
      <div className="manga-image">
        <img src={imageUrl} alt="Manga" />
      </div>

      {/* Phần tên */}
      <div className="manga-content">{children}</div>
    </div>
  );
};

export default MangaCard;
