import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/zahid.official8" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zahid-web/" },
    { icon: Github, href: "https://github.com/zahid-official" },
    { icon: Twitter, href: "https://x.com/zahid_official8" },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-[#141f0a] text-background relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="custom-container pt-18 pb-8 text-sm space-y-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 items-center gap-10 text-center sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-6 lg:text-left">
          {/* Branding */}
          <div className="w-full flex flex-col lg:items-start items-center pr-0 lg:col-span-2 gap-4">
            <Link aria-label="Go to homepage" href="/">
              <Logo isScrolled={false} />
            </Link>

            <p className="text-base -mt-1.5 text-background/80">
              Transforming spaces into timeless elegance. We blend creativity,
              functionality, and sustainability to craft interiors that inspire.
            </p>

            {/* Social Links */}
            <div className="w-full flex flex-col lg:items-start items-center">
              <h3 className="text-lg font-medium -mt-1 mb-2 flex items-center gap-2">
                Follow us{" "}
                <span className="inline-block h-px w-12 bg-background/30"></span>
              </h3>
              <div className="flex gap-4" aria-label="Social media links">
                {/* Social Icons */}
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center transition-all duration-300 hover:bg-background hover:text-liminal-secondary hover:scale-110"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column Sections */}
          {[
            {
              title: "Company",
              links: [
                { label: "About Liminal", href: "/about-us" },
                { label: "Showroom", href: "/contact" },
                { label: "Support", href: "/contact" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Features", href: "/shop" },
                { label: "Products", href: "/shop" },
                { label: "Guides", href: "/contact" },
                { label: "Accessibility", href: "/contact" },
              ],
            },
            {
              title: "Contact Us",
              links: [
                { label: "(+880) 1869618216", href: "tel:+8801869618216" },
                {
                  label: "zahid.official8@gmail.com",
                  href: "mailto:zahid.official8@gmail.com",
                },
                {
                  label: "House Building, Uttara, Dhaka",
                  href: "/",
                },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="text-background text-base font-semibold tracking-tight">
                {section.title}
              </h2>
              <nav
                className="flex flex-col gap-3"
                aria-label={`${section.title} links`}
              >
                {section.links.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item?.href}
                    className="text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {item?.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          data-orientation="horizontal"
          role="presentation"
          className="bg-background/10 shrink-0 h-px w-full mt-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-background/50 order-2 text-center lg:order-1 lg:text-left">
            <span>Copyright © {currentYear}</span>{" "}
            <Link className="hover:underline text-background/70" href="/">
              Liminal Interior Design
            </Link>
            . All rights reserved.
          </p>

          <nav
            className="order-1 flex flex-col items-center gap-4 text-center lg:order-2 lg:flex-row lg:items-start lg:gap-8 lg:text-left"
            aria-label="Legal links"
          >
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <Link
                  key={item}
                  href="/contact"
                  className="text-background/50 hover:text-background transition-colors duration-200"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
