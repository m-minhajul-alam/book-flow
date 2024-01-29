const FooterStaet = () => {
  const SITEMAP = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
      title: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];
  return (
    <div className="mx-auto text-center grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
      {SITEMAP.map(({ title, links }, key) => (
        <div key={key} className="w-full">
          <h3 className="mb-4 text-sm font-bold uppercase opacity-50">{title}</h3>
          <ul className="space-y-1">
            {links.map((link, key) => (
              <p key={key} className="font-normal text-xs">
                <a
                  href="#"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  {link}
                </a>
              </p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterStaet;
