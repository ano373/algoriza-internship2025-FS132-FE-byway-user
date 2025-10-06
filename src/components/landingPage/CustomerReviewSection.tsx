import ReviewCard from "./ReviewCard";

export default function CustomerReviewSection() {
  const reviews = [
    {
      name: "Jane Doe",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      review: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    },
    {
      name: "Jane Doe",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      review: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    },
    {
      name: "Jane Doe",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      review: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    },
  ];

  return (
    <section className="w-full bg-gray-100 h-[512px] flex flex-col justify-center px-8">
      <div className="pl-10  flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          What our Customers Say
          <br />
          About Us
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2">
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            name={review.name}
            role={review.role}
            image={review.image}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
}

<div className="flex "></div>;
