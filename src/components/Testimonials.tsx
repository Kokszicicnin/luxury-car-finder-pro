import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "James Wilson",
    role: "CEO, Tech Innovations",
    text: "The luxury car buying experience was exceptional. The attention to detail and personalized service exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100"
  },
  {
    name: "Sarah Chen",
    role: "Investment Banker",
    text: "Found my dream car within days. The virtual showroom made the selection process incredibly smooth and enjoyable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
  },
  {
    name: "Michael Roberts",
    role: "Entrepreneur",
    text: "The premium service and attention to detail made this the best car buying experience I've ever had.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center text-center ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <p className="text-lg md:text-xl mb-6 text-gray-700">
                  "{testimonial.text}"
                </p>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-luxury-gray">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-luxury-gold" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;