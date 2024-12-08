import AboutUsSection from "./aboutfooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFulILinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white mt-[120px]">
      <div className="container mx-auto px-4 py-16">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>

        {/* Main Footer Sections */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-[56px]">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <AboutUsSection />
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <UsefulLinksSection />
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <HelpSection />
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <RecentPostsSection />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#4F4F4F] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Ubaid Raza. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
