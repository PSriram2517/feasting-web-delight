
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Users, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
];

const Reservations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [seatingPreference, setSeatingPreference] = useState("indoor");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Display success toast
      toast({
        title: "Reservation Successful",
        description: `Your table for ${guests} has been reserved on ${date ? format(date, "MMMM d, yyyy") : ""} at ${time}. We look forward to seeing you!`,
        variant: "default",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setGuests(2);
      setDate(undefined);
      setTime(undefined);
      setSeatingPreference("indoor");
      setSpecialRequests("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-restaurant-charcoal">
              Reserve Your Table
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your spot for an unforgettable dining experience at FOOD FEAST
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-restaurant-charcoal">Make a Reservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests*
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-center border-none focus:outline-none focus:ring-0 py-2"
                        min="1"
                        max="20"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(20, guests + 1))}
                        className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date*
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time*
                    </label>
                    <div className="relative">
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy focus:border-transparent"
                        required
                      >
                        <option value="" disabled selected>
                          Select a time
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seating Preference
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className={`border rounded-md p-4 cursor-pointer transition-all ${
                        seatingPreference === "indoor"
                          ? "border-restaurant-burgundy bg-restaurant-burgundy/10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSeatingPreference("indoor")}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mb-2 ${
                            seatingPreference === "indoor"
                              ? "text-restaurant-burgundy"
                              : "text-gray-500"
                          }`}
                        >
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span
                          className={`text-sm font-medium ${
                            seatingPreference === "indoor"
                              ? "text-restaurant-burgundy"
                              : "text-gray-700"
                          }`}
                        >
                          Indoor
                        </span>
                      </div>
                    </div>
                    
                    <div
                      className={`border rounded-md p-4 cursor-pointer transition-all ${
                        seatingPreference === "outdoor"
                          ? "border-restaurant-burgundy bg-restaurant-burgundy/10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSeatingPreference("outdoor")}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mb-2 ${
                            seatingPreference === "outdoor"
                              ? "text-restaurant-burgundy"
                              : "text-gray-500"
                          }`}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2v8l4.5 4.5" />
                          <path d="M18 12H9" />
                        </svg>
                        <span
                          className={`text-sm font-medium ${
                            seatingPreference === "outdoor"
                              ? "text-restaurant-burgundy"
                              : "text-gray-700"
                          }`}
                        >
                          Outdoor
                        </span>
                      </div>
                    </div>
                    
                    <div
                      className={`border rounded-md p-4 cursor-pointer transition-all ${
                        seatingPreference === "private"
                          ? "border-restaurant-burgundy bg-restaurant-burgundy/10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSeatingPreference("private")}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mb-2 ${
                            seatingPreference === "private"
                              ? "text-restaurant-burgundy"
                              : "text-gray-500"
                          }`}
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span
                          className={`text-sm font-medium ${
                            seatingPreference === "private"
                              ? "text-restaurant-burgundy"
                              : "text-gray-700"
                          }`}
                        >
                          Private
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy focus:border-transparent"
                    placeholder="Please let us know if you have any special requests or dietary requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Reserve Table"}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Information Section */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6 text-restaurant-charcoal">Reservation Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Users className="mr-4 text-restaurant-burgundy" />
                    <div>
                      <h3 className="text-lg font-medium text-restaurant-charcoal">Group Size</h3>
                      <p className="text-gray-600">
                        For parties larger than 10, please call us directly at (123) 456-7890 for special arrangements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 text-restaurant-burgundy" />
                    <div>
                      <h3 className="text-lg font-medium text-restaurant-charcoal">Reservation Policy</h3>
                      <p className="text-gray-600">
                        Tables are held for 15 minutes past the reservation time. Please call if you're running late.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarIcon className="mr-4 text-restaurant-burgundy" />
                    <div>
                      <h3 className="text-lg font-medium text-restaurant-charcoal">Cancellation Policy</h3>
                      <p className="text-gray-600">
                        Kindly provide at least 4 hours notice for cancellations to avoid a cancellation fee.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Utensils className="mr-4 text-restaurant-burgundy" />
                    <div>
                      <h3 className="text-lg font-medium text-restaurant-charcoal">Special Occasions</h3>
                      <p className="text-gray-600">
                        Celebrating a special occasion? Let us know in the special requests section and we'll make your evening memorable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-restaurant-burgundy text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Hours of Operation</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-medium">Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-medium">Friday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reservations;
