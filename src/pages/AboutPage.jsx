import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, Scissors, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import fade1 from "../images/Works/fade1.jpg"
// import hair2 from "../images/Works/hair2.jpg"
// import hair from "../images/Works/hair3.jpg"
// import hair3 from "../images/Works/hair_before_after_1.jpg"
// import hair4 from "../images/Works/hair_before_after_2.jpg"
// import hair5 from "../images/Works/hair_before_after_3.jpg"
// import kid1 from "../images/Works/kid1.jpg"
// import hair6 from "../images/Works/hair_before_after_4.jpg"
// import hair7 from "../images/Works/hair_before_after_5.jpg"
// pro images
import pro1 from "../images/Works/pro/pro1.AVIF"
import pro2 from "../images/Works/pro/pro2.AVIF"
import pro3 from "../images/Works/pro/pro3.AVIF"
import pro4 from "../images/Works/pro/pro4.AVIF"
import pro5 from "../images/Works/pro/pro5.AVIF"
import pro6 from "../images/Works/pro/pro6.AVIF"
import pro7 from "../images/Works/pro/pro7.AVIF"
import pro8 from "../images/Works/pro/pro8.AVIF"
import pro9 from "../images/Works/pro/pro9.AVIF"

// Define images outside the component - now with 9 square images
const workImage1 = pro1;
const workImage2 = pro2;
const workImage3 = pro3;
const workImage4 = pro4;
const workImage5 = pro5;
const workImage6 = pro6;
const workImage7 = pro7;
const workImage8 = pro8;
const workImage9 = pro9;

// Define animation variants outside the component
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutPage() {
  const navigate = useNavigate();

  const navigateToContactUs = () => {
    navigate("/", { state: { scrollToContactUs: true } });
  };

  // Define refs
  const storyRef = useRef(null);
  const worksRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Define state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Define in-view states
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isWorksInView = useInView(worksRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  // Define all content data - kept for reference but without titles and descriptions
  const workItems = [
    { image: workImage1 },
    { image: workImage2 },
    { image: workImage3 },
    { image: workImage4 },
    { image: workImage5 },
    { image: workImage6 },
    { image: workImage7 },
    { image: workImage8 },
    { image: workImage9 }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Expert Team",
      description:
        "Our skilled stylists bring years of experience and continual education in the latest techniques.",
    },
    {
      icon: <Scissors className="h-6 w-6 text-white" />,
      title: "Quality Products",
      description:
        "We use only premium hair products that deliver exceptional results while caring for your hair.",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Personalized Service",
      description:
        "Every client receives a customized consultation to ensure your unique needs are met.",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Award Winning",
      description:
        "Recognized for excellence in styling, customer service, and innovation in the industry.",
    },
  ];

  const testimonials = [
    // Group 1
    {
      name: "Jamie White",
      text: "Absolutely love how my hair turned out! The stylist really understood what I wanted and exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Alex Johnson",
      text: "The atmosphere is so relaxing and the service was fantastic. Best haircut I've had in years!",
      rating: 5,
    },
    {
      name: "Taylor Wilson",
      text: "I've been coming to Cut d Uncut for over two years now. The consistent quality and attention to detail keeps me coming back.",
      rating: 5,
    },
    // Group 2
    {
      name: "Jordan Lee",
      text: "The color specialist here is amazing! My highlights look so natural and beautiful.",
      rating: 5,
    },
    {
      name: "Casey Morgan",
      text: "First time getting a fade here and I'm impressed. Clean lines and perfect execution.",
      rating: 5,
    },
    {
      name: "Riley Smith",
      text: "They listen carefully to what you want and deliver even better than expected.",
      rating: 5,
    },
    // Group 3
    {
      name: "Dana Brown",
      text: "My daughter was nervous for her first salon haircut, but they made her feel so comfortable. Great with kids!",
      rating: 5,
    },
    {
      name: "Morgan Bailey",
      text: "The styling tips they shared helped me maintain my look at home. True professionals who care.",
      rating: 5,
    },
    {
      name: "Avery Thomas",
      text: "They took my faded, damaged hair and transformed it completely. Worth every penny!",
      rating: 5,
    },
    // Group 4
    {
      name: "Quinn Roberts",
      text: "The balayage technique they used gave me the most natural-looking dimension. Everyone asks where I got it done!",
      rating: 5,
    },
    {
      name: "Drew Parker",
      text: "Best salon experience I've had in years. The head massage during shampooing was heavenly.",
      rating: 5,
    },
    {
      name: "Sam Taylor",
      text: "They're always on time, professional, and make you feel like their most important client.",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (isTestimonialsInView) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => {
          const nextGroup = prev + 3;
          return nextGroup >= testimonials.length ? 0 : nextGroup;
        });
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isTestimonialsInView, testimonials.length]);

  return (
    <div className="bg-black text-white pt-20">
      {/* About Us / Our Story Section */}
      <section className="py-20" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleVariants}
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              About GUPIT
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where style meets expertise
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, Cut d Uncut began with a simple vision: to
                create a salon experience that combines technical excellence
                with personalized care. What started as a small studio has grown
                into a destination for those seeking exceptional hair services.
              </p>
              <p className="text-gray-300 mb-4">
                Our name "Cut d Uncut" represents our philosophy of revealing
                your true beauty through our artistry. We believe that the
                perfect cut or color doesn't just change your hair – it enhances
                your natural features and boosts your confidence.
              </p>
              <p className="text-gray-300">
                Today, we're proud to be a team of passionate stylists dedicated
                to helping clients look and feel their best. Whether you're
                seeking a subtle trim or a bold transformation, we're here to
                bring your vision to life.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 grid grid-cols-2 gap-4"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
                >
                  <div className="bg-gray-700 rounded-full p-2 mb-4 w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Works Section - Updated with 9 square photos without titles and descriptions */}
      <section className="py-20 bg-gray-950" ref={worksRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleVariants}
            initial="hidden"
            animate={isWorksInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl font-serif mb-4">Our Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformations that speak for themselves
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isWorksInView ? "visible" : "hidden"}
          >
            {workItems.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Removed the title and description overlay */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Show 3 testimonials at a time */}
      <section className="py-20 bg-gray-950" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl font-serif mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients have to say about their experience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            {testimonials
              .slice(currentTestimonial, currentTestimonial + 3)
              .map((testimonial, index) => (
                <motion.div
                  key={currentTestimonial + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg"
                >
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-400">- {testimonial.name}</p>
                </motion.div>
              ))}
          </motion.div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {[0, 3, 6, 9].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  Math.floor(currentTestimonial / 3) === Math.floor(index / 3)
                    ? "bg-white"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`View testimonial group ${
                  Math.floor(index / 3) + 1
                }`}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            <button
              onClick={navigateToContactUs}
              className="px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
    transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
            >
              Book Appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}