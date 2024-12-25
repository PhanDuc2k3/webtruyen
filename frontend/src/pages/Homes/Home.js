import React, { useState } from "react";
import "./Home.scss";
import MangaCard from "../../components/MangaCard/MangaCard";

const Home = () => {
  const totalCards = 50; // Tổng số card (ví dụ)
  const cardsPerPage = 24; // Số card tối đa trên mỗi trang

  // Tạo mảng card giả lập
  const cards = Array(totalCards).fill({
    imageUrl:
      "https://static.minhtuanmobile.com/uploads/editer/images/2024/04/bo-hinh-nen-dien-thoai-chu-de-one-piece-doc-dao-1.webp",
    title: "One Piece",
    rating: '4',
     chapters: [
    { name: "Chapter 1090", number: "1090", link: "https://example.com/1090",daysAgo: 2 },
    { name: "Chapter 1089", number: "1089", link: "https://example.com/1089",daysAgo: 3 },
  ],
  });

  const [currentPage, setCurrentPage] = useState(1); // State cho trang hiện tại

  // Tính tổng số trang
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Lấy các card cho trang hiện tại
  const currentCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  // Hàm chuyển trang
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="divHome">
      <div className="Latest_manga_update">
        <div className="Latest_manga_update_title">
          <p>LATEST MANGA UPDATE</p>
        </div>
        {/* Hiển thị card */}
        <div className="Latest_manga_update_cards">
          {currentCards.map((card, index) => (
            <MangaCard
              key={index}
              imageUrl={card.imageUrl}
              rating={card.rating}
              chapters={card.chapters} // Truyền prop chapters
            >
              <p>{card.title}</p>
            </MangaCard>
          ))}


        </div>

        {/* Điều hướng phân trang */}
        <div className="pagination-controls">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
