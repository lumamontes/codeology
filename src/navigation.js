import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "#",
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/codeology89/",
    },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/lumamontes/codeology",
    },
  ],
  footNote: `
   <div class="">
          <a class="inline-block font-bold text-xl text-primary" }>Codeology</a>
        </div>
        <span class="text-[12px]">
    👽
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://lumamontes.vercel.app/en">Luma</a> 
    </span>
  </div>

  `,
};
