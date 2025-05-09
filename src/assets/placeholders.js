/* gmbh placeholder image */
import Image from "next/image";
import gmbhPlaceholder from "@assets/landing/gmbh-placeholder.jpeg";
import { bento } from "@components/projects/bentoGrid";

/* Product thumbnails */
import industrialLightingThumbnail from "@assets/landing/industrial-lighting-thumbnail2.jpg";
import commercialLightingThumbnail from "@assets/landing/commercial-lighting-thumbnail.jpeg";
import landscapeLightingThumbnail from "@assets/landing/landscape-lighting-thumbnail2.png";
import contactUsImage from "@assets/landing/contact-us.jpg";

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
        contactUsImage,
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
    contact: contactUsImage,
};

/* data */
export const projectsData = {
    overviewSection: {
        title: "Projects",
        description:
            "Browse through our recent projects below to gain insights into our capabilities. Each project showcases the passion and dedication we bring to the table. If you're looking for a reliable partner for your next venture, we're ready to turn your ideas into remarkable success stories.",
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
        // videos: ["LINEOFLEX.mp4", "LM Magnetic Track Series.mp4"],
        videos: ["LINEOFLEX.mp4"],
    },

    aboutSection: {
        title: ["Innovative technologies", "with care for people"],
        description:
            "Driven by the increasing demand for energy efficient lighting, Lyte Master GmbH has, Since the late 2000s been in the LED lighting market and more recently taking advantage of the rapid developments in LED technology to bring you a world class range of LED Lighting Solutions.",
        cta: {
            text: "About Us",
            href: "#",
        },
        images: [
            // placeholderImages.about,
            "landing_about1.png",
            "landing_about2.png",
            "landing_about3.png",
            // placeholderImages.about,
            // placeholderImages.about,
        ],
    },

    productsSection: {
        title: "Our Specialization",
        description:
            "At Lyte Master, we specialize in delivering innovative and high-quality lighting solutions tailored to meet diverse needs across various industries. Our expertise spans multiple lighting applications, ensuring optimal performance, energy efficiency, and aesthetic appeal.",
        products: [
            {
                // Descriptions were removed but removing the attribute "description" causes page to break
                title: "Commercial Lighting",
                description: "",
                link: "/products/category?category_id=1",
                cta: {
                    text: "See More",
                    href: "/products/category?category_id=1",
                },
                thumbnail: placeholderImages.commercial,
                number_of_products: 23,
                highlight: {
                    href: "/products/category?category_id=1",
                    text: "See More",
                },
            },
            {
                title: "Industrial Lighting",
                description: "",
                link: "/products/category?category_id=2",
                cta: {
                    text: "See More",
                    href: "#",
                },
                thumbnail: placeholderImages.industrial,
                number_of_products: 15,
                highlight: {
                    href: "#",
                    text: "See More",
                },
            },
            {
                title: "Landscape Lighting",
                link: "/products/category?category_id=3",
                description: "",
                cta: {
                    text: "See More",
                    href: "#",
                },
                thumbnail: placeholderImages.landscape,
                number_of_products: 14,
                highlight: {
                    href: "#",
                    text: "See More",
                },
            },
        ],
        productsScroll: [
            { text: "Lighting Solutions" },
            { text: "Sustainable Illumination" },
            { text: "Innovative Lighting Technology" },
            { text: "Next-Gen Lighting Solutions" },
            { text: "World-Class LED Products" },
            { text: "Pioneering Illumination Excellence" },
            { text: "Unrivaled LED Ingenuity" },
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
                text: "Advancing energy-efficient lighting technology",
            },
            {
                text: "High-quality, long-lasting fixtures",
            },
            {
                text: "We prioritize eco-friendly LED solutions that reduce energy consumption",
            },
            {
                text: "Seamless design and performance",
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
                Join our newsletter to stay up to date with{" "}
                <b>all things lighting</b>.
            </span>
        ),
        cta: {
            text: "Subscribe",
        },
    },

    contactSection: {
        title: "Would you like to discuss a project?",
        description: "",
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
        title: "Lorem ipsum dolor sit amet consectetur. Nibh sit sit non adipiscing.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Quis scelerisque in vitae habitasse quisque. Consectetur urna feugiat sollicitudin bibendum elit viverra nunc...",
        href: "#",
    },
    news: Array(9).fill(newsItemData),
};
