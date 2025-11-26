// TestimonialTicker.jsx - İyileştirilmiş Son Hali

import "./TestimonialTicker.css";

const testimonials = [
  {
    name: "Emma",
    text: "NovaAI saved me hours every week by automating complex workflows. It's truly a premium experience!",
    avatar: "/images/emma.jpg",
  },
  {
    name: "Henry",
    text: "The sleek and modern interface design is exactly the quality I expect from professional software. It is extremely enjoyable to use.",
    avatar: "/images/liam.jpg",
  },
  {
    name: "Olivia",
    text: "I had never been able to see my data so clearly, thanks to the analysis and reporting features. It has improved the quality of my work.",
    avatar: "/images/olivia.jpg",
  },
  {
    name: "Jhon",
    text: "Thanks to its mobile compatibility, I can handle my tasks anytime, anywhere. NovaAI has made my life easier.",
    avatar: "/images/man.jpg",
  },
];

export default function TestimonialTicker() {
  return (
    <div className="testimonial-wrap">
      {/* Testimonial Track, kesintisiz döngü için iki katına çıkarıldı */}
      <div className="testimonial-track">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div className="testimonial-card" key={i}>
            {/* Kart içeriği dikey akışı destekleyecek şekilde güncellendi */}
            <img src={t.avatar} alt={t.name} className="avatar" />
            <div className="info">
              <p className="name">{t.name}</p>
              <p className="text">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
