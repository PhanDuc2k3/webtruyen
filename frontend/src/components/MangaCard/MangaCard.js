import React from "react";
import "./MangaCard.scss"; // Import file CSS để tạo kiểu

const MangaCard = ({ imageUrl, children, rating,chapters }) => {
  // Hàm render sao
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="manga-card">
      {/* Phần ảnh */}
      <div className="manga-image">
        <img src={imageUrl} alt="Manga" />
      </div>

      {/* Phần tên */}
      <div className="manga-content">{children}</div>

      {/* Phần đánh giá */}
      <div className="manga-rating">{renderStars(rating)}</div>
      {/* Phần chapter */}
       {/* Phần chapter */}
      <div className="manga-chapters">
        {chapters.map((chapter, index) => (
          <div key={index} className="chapter-item">
            <button
              className="chapter-button"
              onClick={() => window.open(chapter.link, "_blank")}
            >
              {chapter.name}
            </button>
            <span className="chapter-days">{chapter.daysAgo} days ago</span>
          </div>
        ))}
      </div>

    </div>
  );
};


export default MangaCard;
