import Image from "next/image";

const footerLinks = [
  {
    label: "Privacy Policy",
    href: "#privacy-policy",
  },
  {
    label: "Term and conditions",
    href: "#terms-and-conditions",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#facebook",
    icon: "/fb-icon.png",
  },
  {
    label: "X",
    href: "#x",
    icon: "/fb-icon.png",
  },
  {
    label: "Instagram",
    href: "#instagram",
    icon: "/fb-icon.png",
  },
  {
    label: "YouTube",
    href: "#youtube",
    icon: "/fb-icon.png",
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: "/fb-icon.png",
  },
];

export default function DashboardFooter() {
  return (
    <footer
      className="
        flex
        h-[24px]
        w-[1177px]
        items-center
        justify-between
        gap-[12px]
        rounded-[16px]
      "
    >
      {/* Legal information */}
      <div
        className="
          flex
          h-[16px]
          w-[997px]
          items-center
          gap-[32px]
        "
      >
        <p
          className="
            whitespace-nowrap
            text-[12px]
            font-semibold
            leading-[130%]
            text-[#333333]
          "
        >
          Copyright © 2025 Peterdraw
        </p>

        <nav
          aria-label="Footer navigation"
          className="
            flex
            h-[16px]
            w-[257px]
            items-center
            gap-[16px]
          "
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                whitespace-nowrap
                text-[12px]
                font-normal
                leading-[130%]
                text-[#757575]
                transition-colors
                hover:text-[#856DF3]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#856DF3]
                focus-visible:ring-offset-2
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Social media icons */}
      <div
        className="
          flex
          h-[24px]
          w-[168px]
          items-center
          gap-[12px]
        "
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="
              flex
              h-[24px]
              w-[24px]
              shrink-0
              items-center
              justify-center
              rounded-[6px]
              transition-opacity
              hover:opacity-70
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            <Image
              src={social.icon}
              alt=""
              width={17}
              height={18}
              className="
                h-auto
                max-h-[18px]
                w-auto
                max-w-[17px]
                object-contain
              "
            />
          </a>
        ))}
      </div>
    </footer>
  );
}