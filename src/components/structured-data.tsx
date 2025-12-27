export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mmsdjs.com/#business",
    name: "MMS Events",
    description: "Professional DJ hire, live bands, photo booths & event entertainment for weddings, corporate events & parties across London, Essex & South East UK.",
    url: "https://mmsdjs.com",
    email: "simone@mmsdjs.com",
    image: "https://mmsdjs.com/media/logo.png",
    priceRange: "££",
    areaServed: [
      {
        "@type": "City",
        name: "London",
        containedInPlace: {
          "@type": "Country",
          name: "United Kingdom"
        }
      },
      {
        "@type": "AdministrativeArea",
        name: "Essex",
        containedInPlace: {
          "@type": "Country",
          name: "United Kingdom"
        }
      },
      {
        "@type": "AdministrativeArea",
        name: "South East England",
        containedInPlace: {
          "@type": "Country",
          name: "United Kingdom"
        }
      }
    ],
    serviceType: [
      "Wedding DJ",
      "Corporate Event DJ",
      "Live Band Hire",
      "Photo Booth Hire",
      "Event Lighting",
      "Sound System Hire"
    ],
    knowsAbout: [
      "Wedding Entertainment",
      "Corporate Events",
      "Party Planning",
      "Live Music",
      "DJ Services"
    ],
    foundingDate: "1994",
    slogan: "Professional DJs & Bands for Weddings & Events"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Event Entertainment Services",
    provider: {
      "@type": "LocalBusiness",
      name: "MMS Events",
      url: "https://mmsdjs.com"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278
      },
      geoRadius: "100 miles"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Entertainment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional DJ Services",
            description: "Experienced DJs for weddings, corporate events, and private parties in London and Essex"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Live Band Hire",
            description: "Professional live bands for weddings and events across South East UK"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photo Booth Hire",
            description: "Fun interactive photo booths with props and instant prints"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Lighting & Effects",
            description: "Professional lighting, uplighting, and special effects for events"
          }
        }
      ]
    }
  };

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MMS Events",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Declan & Kate"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Communication was great throughout and the whole thing was simple from our point of view. Please consider this a 5* review!"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Samuel"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "The music was perfect, you really set the scene and got everyone on the dancefloor till the end!"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rachel & Tom"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Simone was absolutely incredible from start to finish. She took all the stress away and handled everything. Whatever we wanted, she was able to source at a really reasonable price."
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Marcus & Priya"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "The personal service was second to none. Simone understood exactly what we wanted and went above and beyond to make it happen."
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MMS Events",
    url: "https://mmsdjs.com",
    description: "Professional DJ hire, live bands & event entertainment for weddings, corporate events & parties across London, Essex & South East UK.",
    publisher: {
      "@type": "Organization",
      name: "MMS Events",
      logo: {
        "@type": "ImageObject",
        url: "https://mmsdjs.com/media/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
