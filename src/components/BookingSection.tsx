import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser"; // Import @emailjs/browser

const BookingSection = () => {
  const { toast } = useToast();
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    const templateParams = {
      name: bookingData.name,
      phone: bookingData.phone,
      email_address: bookingData.email,
      service_opted: bookingData.service,
      preferred_date: bookingData.date,
      preferred_time: bookingData.time,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your template ID
        templateParams,
        import.meta.env.VITE_PUBLIC_ID // Replace with your PUBLIC ID
      )
      .then(
        (response) => {
          console.log("SUCCESS", response);
          toast({
            title: "Booking Request Sent!",
            description: "We'll confirm your appointment shortly.",
            duration: 5000,
          });
        },
        (error) => {
          console.log("FAILED", error);
          toast({
            title: "Error",
            description:
              "There was an issue sending your request. Please try again later.",
            duration: 5000,
          });
        }
      );

    // Reset the form
    setBookingData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      service: "",
    });
  };

  return (
    <section id="booking" className="section-padding bg-spa-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 heading-decoration">
            Book Your Appointment
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto font-playfair italic">
            Relax. Rejuvenate. Repeat.
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mt-4">
            Take a moment for yourself and schedule a rejuvenating spa
            experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-95 p-8 rounded-lg shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Select Service
                </label>
                <Select
                  value={bookingData.service}
                  onValueChange={(value) =>
                    handleSelectChange("service", value)
                  }
                >
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Aroma Therapy">Aroma Therapy</SelectItem>
                    <SelectItem value="Swedish Massage">
                      Swedish Massage
                    </SelectItem>
                    <SelectItem value="Deep Tissue Massage">
                      Deep Tissue Massage
                    </SelectItem>
                    <SelectItem value="Balinese Massage">
                      Balinese Massage
                    </SelectItem>
                    <SelectItem value="Thai Massage">Thai Massage</SelectItem>
                    <SelectItem value=" Stress Relief Therapy">
                      Stress Relief Therapy
                    </SelectItem>
                    <SelectItem value="Wine Massage">Wine Massage</SelectItem>
                    <SelectItem value="Chocolate Massage">
                      Chocolate Massage
                    </SelectItem>
                    <SelectItem value="Body Polishing">
                      Body Polishing
                    </SelectItem>
                    <SelectItem value="Signature Massage">
                      Signature Massage
                    </SelectItem>
                    <SelectItem value="Maharaja Massage">
                      Maharaja Massage
                    </SelectItem>
                    <SelectItem value="D Tan + Scrub + Foot Massage">
                      D Tan + Scrub + Foot Massage
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Preferred Date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={bookingData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-spa-dark mb-1"
                >
                  Preferred Time
                </label>
                <Select
                  value={bookingData.time}
                  onValueChange={(value) => handleSelectChange("time", value)}
                >
                  <SelectTrigger id="time" className="w-full">
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                    <SelectItem value="19:00">7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-spa-gold hover:bg-opacity-90 text-white border-none py-6 text-lg"
              >
                Book Your Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
