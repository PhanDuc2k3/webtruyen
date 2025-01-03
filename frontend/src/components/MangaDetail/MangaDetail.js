import React, { useState } from "react";
import "./MangaDetail.scss";
import ReactStars from "react-stars";

const MangaDetail = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const [inputValue, setInputValue] = useState("");
    const [chapters, setChapters] = useState(Array.from({ length: 100 }, (_, i) => i + 1));

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Kiểm tra nếu là số hợp lệ
        if (!isNaN(value) && Number(value) > 0) {
            setInputValue(value);

            // Lọc các chương chỉ chứa số nhập
            const filteredChapters = chapters.filter(chapter => chapter.toString().includes(value));
            setChapters(filteredChapters);
        } else {
            // Nếu nhập không hợp lệ, hiển thị lại 100 chương
            setInputValue("");
            setChapters(Array.from({ length: 100 }, (_, i) => i + 1));
        }
    };

    return (
        <div className="manga-detail-container">
            <div className="manga-detail-header">
                <h1>One Piece</h1>
            </div>
            <div className="manga-detail-content">
                <div className="manga-detail-content-img">
                    <img
                        src="https://static.minhtuanmobile.com/uploads/editer/images/2024/04/bo-hinh-nen-dien-thoai-chu-de-one-piece-doc-dao-1.webp"
                        alt="One Piece"
                    />
                </div>
                <div className="manga-detail-content-inf">
                    <ReactStars
                        count={5}
                        value={5}
                        onChange={ratingChanged}
                        size={40}
                        color2={"#ffd700"}
                    />
                    <div className="manga-detail-content-inf-list">
                        <div className="manga-detail-list-left">
                            <p>Rating</p>
                            <p>Rank</p>
                            <p>Alternative</p>
                            <p>Genre</p>
                            <p>Type</p>
                        </div>
                        <div className="manga-detail-list-right">
                            <p>Average 5 / 5 out of 6</p>
                            <p>N/A, it has 8.2K monthly views</p>
                            <p>폭군 아빠는 내가 지킨다!</p>
                            <p>Drama, Fantasy, Manhwa, Romance</p>
                            <p>manhwa</p>
                        </div>
                    </div>
                    <div className="manga-detail-button">
                        <button className="manga-detail-button-FirstLast">
                            Read First
                        </button>
                        <button className="manga-detail-button-FirstLast">
                            Read Last
                        </button>
                        <button className="manga-detail-button-reloadPage">
                            Reload Page
                        </button>
                    </div>
                    <h2 style={{ color: "red" }}>
                        Reload Chapter or Log In to account if you don't find
                        the latest chapter update.
                    </h2>
                </div>
            </div>
            <div className="manga-detail-description">
                <div className="manga-detail-description-title">
                    <h2>MANGA DESCRIPTION</h2>
                </div>
                <div className="manga-detail-description-body">
                    <p>
                        Read manhwa Describe Your Feeling When Being
                        Reincarnated as Your Husband’s Mistress, Describe How
                        You Feel About Being Reincarnated as Your Husband’s
                        Mistress, Describe How You Felt About Being Reincarnated
                        as Your Husband’s Mistress, Describe Your Feelings About
                        Reincarnation as Your Husband’s Mistress, Please Describe
                        How You Feel About Reincarnating as Your Husband’s
                        Mistress, Reincarnating as My Husband’s Mistress,
                        남편의 정부로 환생한 심정을 서술하시오 As the glass-bodied
                        Duchess, I lost my life to a severe seizure. No, I thought
                        I lost it. “…I want you.” And I was reincarnated as a
                        woman who looked exactly like me. But this woman’s body
                        is very strong, isn’t it?
                    </p>
                </div>
            </div>
            <div className="manga-detail-latest-manga-release">
                <div className="manga-detail-latest-manga-release-title">
                    <h2>LATEST MANGA RELEASE</h2>
                </div>
                <div className="manga-detail-latest-manga-release-list-chap">
                    <input
                        type="text"
                        placeholder="Search chapter"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="manga-detail-input"
                    />
                    <div className="manga-detail-list-chap">
                        {chapters.map((chapter) => (
                            <button
                                key={chapter}
                                className="manga-detail-button-chap"
                                onClick={() =>
                                    alert(`You clicked chapter ${chapter}`)
                                }
                            >
                                {chapter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangaDetail;
