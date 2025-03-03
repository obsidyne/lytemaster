/* gmbh placeholder image */
import Image from "next/image";
import gmbhPlaceholder from "@assets/landing/gmbh-placeholder.jpeg";
import { bento } from "@components/projects/bentoGrid";

/* Product thumbnails */
import industrialLightingThumbnail from "@assets/landing/industrial-lighting-thumbnail.jpeg";
import commercialLightingThumbnail from "@assets/landing/commercial-lighting-thumbnail.jpeg";
import landscapeLightingThumbnail from "@assets/landing/landscape-lighting-thumbnail.jpeg";

/* Industries placeholder images */
import heroPlaceholder from "@assets/landing/hero-placeholder.jpeg";

/* bento placeholder images */

import bentoThumbnail1 from "@assets/bento_thumbnail_1.jpeg";
import bentoThumbnail2 from "@assets/bento_thumbnail_2.jpeg";
import bentoThumbnail3 from "@assets/bento_thumbnail_3.jpeg";
import bentoThumbnail4 from "@assets/landing/bento-thumbnail.jpeg";
import bentoThumbnail5 from "@assets/bento_thumbnail_5.jpeg";
import bentoThumbnail6 from "@assets/bento_thumbnail_6.jpeg";
import bentoThumbnail7 from "@assets/bento_thumbnail_7.jpeg";
import bentoThumbnail8 from "@assets/bento_thumbnail_8.jpeg";
import bentoThumbnail9 from "@assets/bento_thumbnail_9.jpeg";
import bentoThumbnail10 from "@assets/bento_thumbnail_10.jpeg";
import bentoThumbnail11 from "@assets/bento_thumbnail_11.jpeg";
import bentoThumbnail12 from "@assets/bento_thumbnail_12.jpeg";
import bentoThumbnail13 from "@assets/bento_thumbnail_13.jpeg";
import bentoThumbnail14 from "@assets/bento_thumbnail_14.jpeg";

export const placeholderImages = {
  bento: [
    bentoThumbnail1,
    bentoThumbnail2,
    bentoThumbnail3,
    bentoThumbnail4,
    commercialLightingThumbnail,
    industrialLightingThumbnail,
    bentoThumbnail5,
    bentoThumbnail6,
    bentoThumbnail7,
    bentoThumbnail8,
    bentoThumbnail9,
    bentoThumbnail10,
    bentoThumbnail11,
    bentoThumbnail12,
    bentoThumbnail13,
    bentoThumbnail14,
  ],
  about: gmbhPlaceholder,
  industries: heroPlaceholder,
  commercial: commercialLightingThumbnail,
  industrial: industrialLightingThumbnail,
  landscape: landscapeLightingThumbnail,
  hero: heroPlaceholder,
};

/* data */
export const projectsData = {
  overviewSection: {
    title: "Projects",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pretium aliquet dictumst viverra id imperdiet turpis nulla libero netus. Amet in mattis adipiscing pulvinar sed tincidunt. Eget neque blandit feugiat risus vestibulum proin at augue. Malesuada adipiscing consequat vel tortor hac suspendisse ac dictum.",
  },

  projects: [
    {
      tag: "commercial",
      title: "Commercial Projects",
      cta: {
        name: "Load More",
        href: "#",
      },
      projects: [
        {
          name: "Forum Showroom",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[3],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.lg,
        },
        {
          name: "Beach Bar Restaurant",
          location: "Jumeirah, UAE",
          image: {
            src: placeholderImages.bento[1],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Cafe Capuchino",
          location: "New York, USA",
          image: {
            src: placeholderImages.bento[4],
            alt: "New York, USA",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Glicerin Bay Office",
          location: "London, UK",
          image: {
            src: placeholderImages.bento[0],
            alt: "London, UK",
          },
          href: "#",
          className: bento.lg,
        },
        {
          name: "Dune Conference Hall",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[5],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Sea Restaurant",
          location: "Tokyo, Japan",
          image: {
            src: placeholderImages.bento[2],
            alt: "Tokyo, Japan",
          },
          href: "#",
          className: bento.sm,
        },
      ],
    },

    {
      tag: "industrial",
      title: "Industrial Projects",
      cta: {
        name: "Load More",
        href: "#",
      },
      projects: [
        {
          name: "Car Showroom",
          location: "SZR-DUBAI, UAE ",
          image: {
            src: placeholderImages.bento[6],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Car Showroom",
          location: "SZR-DUBAI, UAE ",
          image: {
            src: placeholderImages.bento[7],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Forum Showroom",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[8],
            alt: "New York, USA",
          },
          href: "#",
          className: bento.lg,
        },
        {
          name: "Glicerin Bay Office",
          location: "London, UK",
          image: {
            src: placeholderImages.bento[9],
            alt: "London, UK",
          },
          href: "#",
          className: bento.lg,
        },
        {
          name: "Car Showroom",
          location: "SZR-DUBAI, UAE ",
          image: {
            src: placeholderImages.bento[10],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.md,
        },
      ],
    },

    {
      tag: "landscape",
      title: "Landscape Projects",
      cta: {
        name: "Load More",
        href: "#",
      },
      projects: [
        {
          name: "DIAC Housing Facility",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[11],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.lg,
        },
        {
          name: "Beach Bar Restaurant",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[12],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "Office Space",
          location: "Riyadh, KSA",
          image: {
            src: placeholderImages.bento[13],
            alt: "New York, USA",
          },
          href: "#",
          className: bento.sm,
        },
        {
          name: "DIAC Housing Facility",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[14],
            alt: "London, UK",
          },
          href: "#",
          className: bento.lg,
        },

        {
          name: "Seven Luxury Car Rental",
          location: "Dubai, UAE",
          image: {
            src: placeholderImages.bento[15],
            alt: "Dubai, UAE",
          },
          href: "#",
          className: bento.md,
        },
      ],
    },
  ],
};

export const landingData = {
  heroSection: {
    title: (
      <>
        World class range of <br /> lighting solutions
      </>
    ),
    cta: {
      name: "View More",
      href: "#", // TODO: Update this link
    },
  },

  aboutSection: {
    title: ["Innovative technologies", "with care for people"],
    description:
      "Driven by the increasing demand for energy efficient lighting, Lyte Master GmbH has, Since the late 2000s been in the LED lighting market and more recently taking advantage of the rapid developments in LED technology to bring you a world class range of LED Lighting Solutions.",
    cta: {
      text: "About us",
      href: "#",
    },
    images: [
      placeholderImages.about,
      placeholderImages.about,
      placeholderImages.about,
    ],
  },

  productsSection: {
    title: "What we offer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
    products: [
      {
        title: "Commercial Lighting",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
        cta: {
          text: "See More",
          href: "#",
        },
        thumbnail: placeholderImages.commercial,
        number_of_products: 23,
        highlight: {
          href: "#",
          text: "See More",
        },
      },
      {
        title: "Industrial Lighting",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
        cta: {
          text: "See More",
          href: "#",
        },
        thumbnail: placeholderImages.industrial,
        number_of_products: 15,
      },
      {
        title: "Landscape Lighting",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
        cta: {
          text: "See More",
          href: "#",
        },
        thumbnail: placeholderImages.landscape,
        number_of_products: 14,
      },
    ],
    productsScroll: [
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
      { text: "Lighting Solutions" },
    ],
  },

  howWeWorkSection: {
    title: "How we work",
    description:
      "We work with absolute professionalism to deliver you lights with the perfect quality",
    cta: {
      text: "Order now",
      href: "#",
    },
    highlights: [
      {
        text: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur",
      },
    ],
  },
  recentWorksSection: {
    title: "Our recent works",
    projects: projectsData.projects[0].projects,
  },

  newsletterSection: {
    title: (
      <span>
        Join our newsletter to stay up to date with <b>all things lighting</b>.
      </span>
    ),
    cta: {
      text: "Subscribe",
    },
  },

  contactSection: {
    title: "Would you like to discuss a project?",
    description:
      "Driven by the increasing demand for energy efficient lighting, Lyte Master GmbH has, Since the late 2000s been in the LED lighting.",
    cta: {
      text: "Contact Us",
      href: "#",
    },
  },
};

const newsItemData = {
  thumbnail: placeholderImages.hero,
  title: "Lorem ipsum dolor sit amet consectetur. Nibh sit sit non adipiscing.",
  description:
    "Driven by the increasing demand for energy efficient lighting, Lyte Master GmbH has, Since the late 2000s...",
  date: "16 February 2025",
  href: "#",
};

export const newsPageData = {
  featured: {
    thumbnail: placeholderImages.hero,
    title:
      "Lorem ipsum dolor sit amet consectetur. Nibh sit sit non adipiscing.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis scelerisque in vitae habitasse quisque. Consectetur urna feugiat sollicitudin bibendum elit viverra nunc...",
    href: "#",
  },
  news: Array(9).fill(newsItemData),
};
