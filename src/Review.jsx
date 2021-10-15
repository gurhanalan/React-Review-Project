import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [reviewIndex, setReviewIndex] = useState(0);

    const { name, job, image, text } = people[reviewIndex];

    const handleChange = (type) => {
        if (type === "right") {
            setReviewIndex((prev) => (prev < people.length - 1 ? prev + 1 : 0));
        } else if (type === "left") {
            setReviewIndex((prev) => (prev > 0 ? prev - 1 : people.length - 1));
        } else if (type === "random") {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * people.length);
            } while (randomNumber === reviewIndex);

            setReviewIndex(randomNumber);
        }
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button
                    onClick={() => {
                        handleChange("left");
                    }}
                    className="prev-btn"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => {
                        handleChange("right");
                    }}
                    className="next-btn"
                >
                    <FaChevronRight />
                </button>
            </div>
            <button
                onClick={() => {
                    handleChange("random");
                }}
                className="random-btn"
            >
                surprise me
            </button>
        </article>
    );
};

export default Review;
