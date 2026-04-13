import svgPaths from "../../imports/svg-t4eik94b2c";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

const footerLinks = {
  quickLinks: ["Our Work", "About Us", "Contact", "Events", "Collaborations"],
  social: ["Instagram", "Twitter", "LinkedIn", "Facebook", "YouTube"],
  newsletter: ["Sign Up", "Latest News", "New Arrivals", "Special Offers", "Feedback"]
};

export function Footer() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmit = async (data: any) => {
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: data.email });
    
    if (error) {
      if (error.code === '23505') { // Postgres distinctive UNIQUE violation code
        toast.error("Already Subscribed", {
          description: "This email is already on our exclusive mailing list."
        });
      } else {
        toast.error("Subscription Error", {
          description: "Something went wrong. Please try again."
        });
      }
      return;
    }

    setIsSubscribed(true);
    toast.success("Subscribed successfully!", {
      description: "You've been added to our exclusive mailing list."
    });
    reset();
  };

  return (
    <footer className="bg-[#0a0909] text-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div>
            <div className="tracking-[1.32px] text-[22px] mb-6">AUOR</div>
          </div>

          <div>
            <h3 className="text-[16px] mb-4 opacity-90">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[16px] opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] mb-4 opacity-90">Stay Connected</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[16px] opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] mb-4 opacity-90">Newsletter</h3>
            <ul className="space-y-2">
              {footerLinks.newsletter.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[16px] opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 md:col-span-2">
            <h3 className="text-[16px] mb-4">Subscribe</h3>
            <p className="text-[16px] opacity-70 mb-6">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 mb-3">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder={isSubscribed ? "✓ Subscribed" : "Your Email Here"}
                disabled={isSubscribed}
                className="flex-1 bg-transparent border border-white px-3 py-3 text-[16px] placeholder:text-white/50 focus:outline-none focus:border-white/80 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className="w-full sm:w-auto border border-white px-6 py-3 whitespace-nowrap hover:bg-white hover:text-black transition-all duration-300 active:scale-95 disabled:hover:bg-transparent disabled:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting && <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>
            <p className="text-[14px] opacity-50">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[16px] opacity-70">
              <span>© 2026 AUOR Studio. All rights reserved.</span>
              <a href="#privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#terms" className="hover:opacity-100 transition-opacity">Terms of Use</a>
              <a href="#cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>

            <div className="flex gap-3">
              <a href="#facebook" className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2c56c980} fill="white" />
                </svg>
              </a>
              <a href="#instagram" className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="white" fillRule="evenodd" />
                </svg>
              </a>
              <a href="#twitter" className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg className="w-[18px] h-4" fill="none" viewBox="0 0 18 16">
                  <path d={svgPaths.pd265900} fill="white" />
                </svg>
              </a>
              <a href="#linkedin" className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p56afe80} fill="white" fillRule="evenodd" />
                </svg>
              </a>
              <a href="#youtube" className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg className="w-5 h-[14px]" fill="none" viewBox="0 0 20.0141 14.012">
                  <path d={svgPaths.p1fcc3d80} fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
