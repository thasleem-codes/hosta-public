import {
  // AppleIcon as AppStore,
  // PlayIcon as GooglePlay,
  Hospital,
  Phone,
  Mail,
  User,
  Ambulance,
  MessageCircle,
  Instagram,
  Facebook,
  Droplet,
} from "lucide-react";
import splashscreen_icon from "./assets/splash-icon.png";
import hosta_icon from "./assets/HOSTAICON.png";
import { WelcomeAnimation } from "./components/WelcomeAnimation";
import { GoToTopButton } from "./components/GoToTopButton";
import { InstallPWA } from "./components/installPWA";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-emerald-100 to-white flex flex-col">
      <WelcomeAnimation />

      {/* Scrollable content */}
      <div id="scrollable-content" className="flex-1 overflow-auto">
        <GoToTopButton containerId="scrollable-content" />

        {/* Header */}
        <header className="border-b border-white bg-transparent absolute">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 h-10">
              <img
                src={splashscreen_icon}
                alt="HOSTA Logo"
                width={120}
                height={40}
                className="h-14 w-auto border border-green-600 rounded-full mx-4"
              />
            </div>
            <nav className="flex gap-6 mx-4 my-5">
              <a
                href="#platforms"
                className="text-emerald-700 hover:text-emerald-600 hover:font-bold"
              >
                Platforms
              </a>
              <a
                href="#contact"
                className="text-emerald-700 hover:text-emerald-600 hover:font-bold"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-transparent h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <img
              src={hosta_icon}
              alt="HOSTA Icon"
              width={120}
              height={120}
              className="mx-auto mb-8 rounded-full border border-green-600"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-700 mb-6">
              Excellence in Healthcare
            </h1>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600">
                <b>HOSTA</b> – Your Complete Healthcare Companion
                <br />
                Connect with trusted doctors, hospitals, and clinics across
                Allopathy, Unani & more. Easily book appointments and manage
                your healthcare anytime, anywhere. Instantly find or request
                blood with our integrated Blood Bank feature—all in one app.
              </p>
              {/* <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                <b>ഹോസ്റ്റ</b> - നിങ്ങളുടെ പൂർണ്ണമായ ആരോഗ്യ പരിപാലന സഹായി. അലോപ്പതി, യുനാനി,
                മറ്റ് ചികിത്സാശാഖകളിലെ ഡോക്ടർമാരുമായും ആശുപത്രികളുമായും
                ബന്ധപ്പെടൂ. അപ്പോയിൻ്റ്മെൻ്റുകൾ ബുക്ക് ചെയ്യൂ. ഞങ്ങളുടെ ബ്ലഡ്
                ബാങ്ക് ഫീച്ചറിലൂടെ എളുപ്പത്തിൽ രക്തം കണ്ടെത്തുകയും
                ആവശ്യപ്പെടുകയും ചെയ്യൂ. ലളിതം, വേഗത്തിൽ, വിരൽത്തുമ്പിൽ.
              </p> */}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-emerald-700 mb-12">
              Our Platforms
            </h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "User Platform",
                  description:
                    "Find and book appointments with healthcare providers",
                  icon: <User className="w-12 h-12 text-emerald-600 mb-4" />,
                },
                {
                  title: "Hospital Platform",
                  description: "Manage your hospital services and appointments",
                  icon: (
                    <Hospital className="w-12 h-12 text-emerald-600 mb-4" />
                  ),
                },
                {
                  title: "Ambulance Platform",
                  description: "Emergency response and ambulance management",
                  icon: (
                    <Ambulance className="w-12 h-12 text-emerald-600 mb-4" />
                  ),
                },
                {
                  title: "Blood Bank",
                  description: "Find, request, and manage blood donations",
                  icon: <Droplet className="w-12 h-12 text-emerald-600 mb-4" />,
                },
              ].map((platform) => (
                <div
                  key={platform.title}
                  className="flex-1 min-w-[220px] max-w-[250px] bg-white p-6 rounded-lg shadow-lg border border-emerald-100 hover:border-emerald-300 transition-colors"
                >
                  {platform.icon}
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    {platform.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Apps Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
            Get the HOSTA Mobile App
          </h2>
          <InstallPWA />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-emerald-700 mb-12">
              Contact Us
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Whatsapp",
                  url: "https://wa.me/919400517720",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  url: "tel:+919400517720",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  url: "mailto:hostahealthcare@gmail.com",
                },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  title: "Instagram",
                  url: "https://www.instagram.com/hosta_healthcare/?igsh=MnR6d3h0YTJlbXEy",
                },
                {
                  icon: <Facebook className="w-6 h-6" />,
                  title: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61566955145072&mibextid=LQQJ4d&rdid=rUkuyexGh2CyFoDD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CL6WSxXSq%2F%3Fmibextid%3DLQQJ4d#",
                },
              ].map((elements) => {
                return (
                  <a
                    key={elements.title}
                    href={elements.url}
                    target="_blank"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    {elements.icon}
                    <span>{elements.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} HOSTA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
