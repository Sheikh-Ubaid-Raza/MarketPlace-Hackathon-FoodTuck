export default function HelpSection() {
  const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy']

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto">
      <h3 className="text-xl font-bold mb-6">Help?</h3>
      <ul className="text-[16px] flex flex-col gap-4 leading-6">
        {links.map((link) => (
          <li key={link} className="mb-2">
            <a href="#" className="hover:text-[#FF9F0D] transition duration-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
