import * as React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import ACETOURS from "@assets/img-project/acetours-img.png";
import NUCLEUSUI from "@assets/img-project/nucleus-ui-img.png";
import NUCLEUSICONS from "@assets/img-project/nucleus-icons-img.png";
import BIZTIPS from "@assets/img-project/biztips-img.png";
import RACUNSHOPEE from "@assets/img-project/shopee-affiliates.jpg";
import Slider from "react-slick";
import SHOPEX from "@assets/img-project/shopex.jpg";
import SHOPIFY from "@assets/img-project/shopify.png";
import ComponentDrawer from "@components/global/componentDrawer";

const ProjectPage = () => {
  const btnRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const dummy = [
    {
      order: 1,
      title: "Travel Singapore",
      subtitle:
        "ACETOURS Singapore - Discover Tours, Attractions, Hotels and more - booking.",
      bg: "#2B569A",
      color: "white",
      urlDomain: "http://pkg.ezbooking.co",
      urlVercel: "https://project-travel-orpin.vercel.app",
      img: ACETOURS,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was built to handle interesting travel bookings across continents, countries and cities.",
          ],
          hastag: ["#acetours", "#singapore", "#trip", "#destinations"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["VueJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NuxtJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["TailwindCss", "Typescript"],
        },
      ],
    },
    {
      order: 2,
      title: "Nucleus UI",
      subtitle:
        "The all-in-one UI kit and Design System for Figma - Supercharge your design workflow, kick-start your projects faster, and level up your process. Pay once and get lifetime updates.",
      bg: "#6B4EFF",
      color: "white",
      urlDomain: "https://www.nucleus-ui.com",
      urlVercel: "https://figmaterial-thebuddyman.vercel.app",
      img: NUCLEUSUI,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was developed to offer services in the form of packages to increase productivity and fast processes for your project solutions.",
          ],
          hastag: ["#nucleusui", "#nucleuslite", "nucleusuikit"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["TailwindCss", "Typescript"],
        },
      ],
    },
    {
      order: 3,
      title: "Nucleus Free Icons",
      subtitle: "Minimal and beautiful open source icons by Nucleus.",
      bg: "#6B4EFF",
      color: "white",
      urlDomain: "https://icon.nucleus-ui.com",
      urlVercel: "https://project-nucleus-icon.vercel.app",
      img: NUCLEUSICONS,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was built to make it easier for developers to build applications using free icons in SVG format which can be copied, downloaded and customized in terms of color, size and thickness as desired on this website.",
          ],
          hastag: ["#freeicons", "#svg", "#nucleusicon"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["VueJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NuxtJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["TailwindCss", "Typescript"],
        },
      ],
    },
    {
      order: 4,
      title: "BizTips",
      subtitle: "Find Practical Tips for Your Business at BizTips.",
      bg: "#772583",
      color: "white",
      urlDomain: "https://biztips.gobiz.co.id",
      urlVercel: "https://gobiz-frontend.vercel.app/biztips",
      img: BIZTIPS,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was developed for tips and tricks for Gofood seller partners in running their various businesses with guidance and recommendations from the Business Partner education center.",
          ],
          hastag: ["#biztips", "#gobiz", "#mitrausaha"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["Chakra UI", "Typescript"],
        },
        {
          subtitle: "Database used :",
          listDesc: ["Strapi.io"],
        },
      ],
    },
    {
      order: 5,
      title: "Shopex",
      subtitle:
        "Your trusted Shopify online store partner - SHOPEX helps with all types of Shopify online store needs, both large and small, just like your own team.",
      bg: "#F8F6F1",
      color: "black",
      urlDomain: "https://shopex.id/",
      urlVercel: "",
      img: SHOPEX,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was built to introduce various business packages for needs with Shopify Store.",
          ],
          hastag: ["#shopify", "#store", "#shopex"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["TailwindCss", "Chakra UI"],
        },
        {
          subtitle: "Database used :",
          listDesc: ["Sanity.io"],
        },
      ],
    },
    {
      order: 6,
      title: "Racun Shopee",
      subtitle:
        "Mobile app to make it easier for an affiliate to create content.",
      bg: "#f53d2d",
      color: "white",
      urlDomain: "",
      urlVercel: "https://racun-shopee.vercel.app/",
      img: RACUNSHOPEE,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This application was built to make it easier for affiliates to generate links from CMS Sanity.io which are displayed on the client-side, so that Shopee buyers can easily trigger the links displayed on the UI.",
          ],
          hastag: ["#affiliate", "#outfit", "#rekomendasi"],
        },
        {
          subtitle: "Libraries used :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework used :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library used :",
          listDesc: ["Chakra UI", "Typescript"],
        },
        {
          subtitle: "Database used :",
          listDesc: ["Sanity.io"],
        },
      ],
    },
    {
      order: 7,
      title: "Shopify Store",
      subtitle:
        "Shopify is an ecommerce platform offered by Studioalva for building online stores. It lets you sell online with your own website or directly using point-of-sale applications.",
      bg: "#95BF47",
      color: "black",
      urlDomain: "",
      urlVercel: "",
      urlSource: "https://www.shopify.com/",
      img: SHOPIFY,
      desc: [
        {
          subtitle: "Benefits / purpose of this website :",
          listDesc: [
            "This Shopify Store is used by Studioalva to handle client requests in creating their personal websites, both in the form of shops and product catalogues.",
          ],
          hastag: ["#shopify", "#store", "#shopex"],
        },
        {
          subtitle: "Advantages of Shopify :",
          listDesc: [
            "Customizable templates",
            "All in one",
            "A safe and efficient platform",
          ],
        },
      ],
    },
  ];
  const [data, setData] = React.useState({});
  const orderData = dummy.sort(
    (a: { order: number }, b: { order: number }) => b.order - a.order
  );
  const handleData = (e: any) => {
    setData(e);
  };
  const images = [
    {
      url: "https://source.unsplash.com/6000x2000/?programming",
    },
    {
      url: "https://source.unsplash.com/6000x2000/?programmer",
    },
    {
      url: "https://source.unsplash.com/6000x2000/?coding",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box mt={["71px", "71px", "71px", "86px"]} overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
          {images.map((item, idx) => {
            return (
              <Box key={idx}>
                <Image
                  display={item && "flex"}
                  width={"100%"}
                  height={["300px", "300px", "300px", "400px"]}
                  objectFit={"cover"}
                  src={item.url}
                  alt={`img(${idx}`}
                  className="skeleton-box"
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Container maxW={"container.xl"} mb={20}>
        <Text
          as="h4"
          textAlign={"center"}
          mt={["50px"]}
          fontSize={25}
          color={"gray.600"}
        >
          SOME OF MY LATEST WORK
        </Text>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} mt={10}>
          {orderData.map((item: any) => {
            return (
              <Box
                ref={btnRef}
                onClick={onOpen}
                key={item.order}
                bg={item.bg}
                color={item.color}
                minH="300px"
                maxH="300px"
                rounded={"md"}
                overflow={"hidden"}
                className={
                  item.title.toLocaleLowerCase() === "coming soon"
                    ? ""
                    : "animate-hover"
                }
                _hover={
                  item.title.toLocaleLowerCase() === "coming soon"
                    ? { cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
              >
                <Image
                  onClick={() => {
                    handleData(item);
                  }}
                  src={item.img.src}
                  alt={item.title}
                  w="full"
                  h={"200px"}
                  objectFit={
                    item.title.toLocaleLowerCase() === "nucleus free icons"
                      ? "fill"
                      : "cover"
                  }
                  objectPosition={"center"}
                />

                <Box
                  py={5}
                  p={2}
                  onClick={() => {
                    handleData(item);
                  }}
                >
                  <Text fontSize={20} fontWeight={600} className="line-clamp-1">
                    {item.title}
                  </Text>
                  <Text className="line-clamp-2">{item.subtitle}</Text>
                </Box>
              </Box>
            );
          })}

          <ComponentDrawer
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            btnRef={btnRef}
            data={data}
          />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProjectPage;
