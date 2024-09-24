import React from "react";

const ProdReview
 = () => {
  const reviews = [
     {
          name: "John Doe",
          rating: "★★★★☆",
          comment: "Great product! Highly recommend.",
          date: "2024-08-01",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Jane Smith",
          rating: "★★★★★",
          comment: "Exceeded my expectations!",
          date: "2024-08-02",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Alice Johnson",
          rating: "★★★☆☆",
          comment: "Good, but has some issues.",
          date: "2024-08-03",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Bob Brown",
          rating: "★★★☆☆",
          comment: "Average product, not bad.",
          date: "2024-08-04",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Charlie Davis",
          rating: "★★★★☆",
          comment: "Very satisfied with this purchase.",
          date: "2024-08-05",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Diana Evans",
          rating: "★★★★☆",
          comment: "Would buy again!",
          date: "2024-08-06",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Frank Green",
          rating: "★★☆☆☆",
          comment: "Not what I expected.",
          date: "2024-08-07",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Grace Harris",
          rating: "★★★★★",
          comment: "Fantastic product!",
          date: "2024-08-08",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Henry Walker",
          rating: "★★★☆☆",
          comment: "It’s okay, could be better.",
          date: "2024-08-09",
          imgSrc: "./src/assets/medal.png",
        },
        {
          name: "Ivy Young",
          rating: "★★★★☆",
          comment: "Happy with the purchase.",
          date: "2024-08-10",
          imgSrc: "./src/assets/medal.png",
        },
      ];

  return (
    <div className="max-w-full flex flex-col items-start justify-start text-left font-poppins w-[1320px] rounded-md bg-gray-00 border border-gray-100 overflow-hidden p-0 pb-10 gap-10">
    
      <section className="w-full flex items-start justify-start p-6 text-gray-900 font-public-sans text-body-medium-600 text-base">
        <div className="w-full flex flex-wrap gap-6">
          {/* Review Section */}
          <div className="grid grid-cols-4 gap-2 w-full h-52 overflow-y-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 p-2.5 border border-gray-300 rounded-lg"
              >
                <img
                  src={review.imgSrc}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">
                    {review.name}
                  </span>
                  <span className="text-gray-600">{review.rating}</span>
                  <span className="text-gray-600">{review.comment}</span>
                  <span className="text-sm text-gray-600">
                    Reviewed on: {review.date}
                  </span>
                </div>
              </div>
            ))}
            {/* Add more review elements as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdReview
;
