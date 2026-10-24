import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import heroBg from '../../assets/convetional.jpg'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all'
const labelClass = 'block text-sm font-semibold text-[#2563eb] mb-2'

const infoRows = [
  { icon: Mail, title: 'Email', lines: ['Info@anidev.africa'] },
  { icon: Phone, title: 'Phone', lines: ['+250 788 399 423'] },
  { icon: MapPin, title: 'Office', lines: ['Inind House, KN 3 Rd, Kigali', 'Kicukiro District', 'Kigali, Rwanda'] },
  { icon: Clock, title: 'Business Hours', lines: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday-Sunday: Closed'] },
]

const reasons = [
  'Access to vetted African talent',
  'Comprehensive training programs',
  'Dedicated support team',
]

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 pt-32 pb-16 md:pt-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563eb] transform skew-x-12 origin-top-right" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Get in Touch</h1>
              <p className="text-lg text-gray-300">
                Have questions about our services? We&apos;re here to help. Reach out to us and let&apos;s discuss how we can empower your business.
              </p>
            </div>
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroBg} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Info + form */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-lg">
            {/* Left info panel */}
            <div className="lg:col-span-4 bg-[#2563eb] text-white p-8 lg:p-12">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2">ANIDEV TECHNOLOGIES</h2>
                <p className="text-white/80 text-sm">Contact Information</p>
              </div>
              {infoRows.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="mb-10 last:mb-0">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {title}
                  </h3>
                  <div className="space-y-1 text-sm text-white/80">
                    {lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-8 p-8 lg:p-12 bg-white">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Send Us A <span className="text-[#2563eb]">Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill Out The Form Below And Our Team Will Get Back To You Within 24 Hours.
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                  <input id="fullName" name="full_name" type="text" required placeholder="Enter Your Full Name" className={inputClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phoneNumber" className={labelClass}>Phone Number *</label>
                    <input id="phoneNumber" name="phone" type="tel" required placeholder="Enter Your Phone Number" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" required placeholder="Enter Your Email" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="inquiryType" className={labelClass}>Inquiry Type *</label>
                  <select id="inquiryType" name="inquiryType" required className={inputClass}>
                    <option value="general">General Inquiry</option>
                    <option value="hiring">Hiring Talent</option>
                    <option value="training">Training Programs</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Subject *</label>
                  <input id="subject" name="subject" type="text" required placeholder="How Can We Help You?" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message *</label>
                  <textarea id="message" name="message" rows={5} required placeholder="How Can We Help You?" className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#2563eb]/25"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Why choose bar */}
          <div className="mt-8 bg-[#2563eb] text-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {reasons.map((r, i) => (
                <div key={r} className="contents">
                  {i > 0 && <div className="hidden sm:block w-px h-6 bg-white/30" />}
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>{r}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 md:h-[500px] bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63799.50383361362!2d30.062152086056166!3d-1.9663212100429146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x19dca7985e753a99%3A0x69db8cd5b853fb3!2sSOLVIT%20AFRICA%20Headquarters%2C%20Inind%20House%2C%20KN%203%20Road%2C%20Kigali!3m2!1d-1.9664074999999999!2d30.103351699999997!4m5!1s0x19dca7985e753a99%3A0x69db8cd5b853fb3!2sInind%20House%2C%20KN%203%20Rd%2C%20Kigali!3m2!1d-1.9664074999999999!2d30.103351699999997!5e0!3m2!1sen!2srw!4v1752594056846!5m2!1sen!2srw"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ANIDEV TECHNOLOGIES Location"
          className="w-full"
          style={{ border: 0 }}
        />
      </section>
    </div>
  )
}
