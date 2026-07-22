
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import BusinessHours from "../components/contact/BusinessHours";
import GoogleMap from "../components/contact/GoogleMap";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

        {/* Hero */}
        <section className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 py-24 text-white">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
              Contact ElectroHub
            </span>

            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              Get In Touch
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Have a question about our products or need assistance?
              We'd love to hear from you. Send us a message and
              our team will respond as soon as possible.
            </p>

          </div>

        </section>

        {/* Contact Section */}
       <section className="py-20">
  <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
    <ContactInfo />
    <ContactForm />
  </div>
</section>

<BusinessHours />
<GoogleMap />

      </main>

      <Footer />
    </>
  );
}