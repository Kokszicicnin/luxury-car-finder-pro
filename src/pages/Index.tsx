import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarShowcase from "@/components/CarShowcase";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CarShowcase />
      <Testimonials />
      <div className="bg-gray-50 py-16">
        <h2 className="text-3xl font-playfair text-center mb-8">Contact Us</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;