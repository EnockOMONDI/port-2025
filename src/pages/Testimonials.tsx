import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Enock is a true creative visionary. His ability to understand our brand needs and translate them into stunning visual designs exceeded our expectations. His technical expertise in web development made our online presence truly stand out.",
      author: "Lucie Saulinah",
      role: "CEO, YummyTummy Goodies",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
    },
    {
      quote: "Working with Enock on our digital transformation was a game-changer. His deep understanding of both design and technology helped us create a seamless online booking system that our customers love.",
      author: "James Mwangi",
      role: "Director, Novustell Travel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
    },
    {
      quote: "Enock's creative direction for our World Cleanup Day campaign was exceptional. His strategic approach to social media and content creation helped us reach and engage with a much larger audience than we anticipated.",
      author: "Sarah Kimani",
      role: "Program Manager, LiveGreat Foundation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
    },
    {
      quote: "The brand identity package Enock created for our startup perfectly captured our vision. His attention to detail and understanding of current design trends helped us establish a strong market presence.",
      author: "David Ochieng",
      role: "Founder, TechSpace Kenya",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900">Client Testimonials</h1>
            <p className="mt-4 text-xl text-gray-600">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-blue-600" />
                </div>
                <blockquote className="text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;