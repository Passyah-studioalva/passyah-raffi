import { Box, Container, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";
// import ACETOURS from "@assets/img-project/acetours.png";
import ACETOURS from "@assets/img-project/acetours-img.png";
// import NUCLEUSUI from "@assets/img-project/nucleus-ui.png";
import NUCLEUSUI from "@assets/img-project/nucleus-ui-img.png";
// import NUCLEUSICONS from "@assets/img-project/nucleus-icons.png";
import NUCLEUSICONS from "@assets/img-project/nucleus-icons-img.png";
// import BIZTIPS from "@assets/img-project/biztips.png";
import BIZTIPS from "@assets/img-project/biztips-img.png";
import RACUNSHOPEE from "@assets/img-project/shopee-affiliates.jpg";
import COMMINGSOON from "@assets/img-project/coming-soon.png";
import Hero from "@src/components/global/hero";
import HERO from "@assets/home.png";

export default function HomePage() {
  const dummy = [
    {
      title: "Travel Singapore",
      desc: "ACETOURS Singapore - Discover Tours, Attractions, Hotels and more - booking.",
      color: "#2B569A",
      /* Domain */
      url: "http://pkg.ezbooking.co",
      /* Vercel */
      // url: 'https://project-travel-orpin.vercel.app'
      img: ACETOURS,
    },
    {
      title: "Nucleus UI",
      desc: "The all-in-one UI kit and Design System for Figma.",
      color: "#6B4EFF",
      /* Domain */
      url: "https://www.nucleus-ui.com",
      /* Vercel */
      // url: "https://figmaterial-thebuddyman.vercel.app",
      img: NUCLEUSUI,
    },
    {
      title: "Nucleus Free Icons",
      desc: "Minimal and beautiful open source icons by Nucleus.",
      color: "#6B4EFF",
      /* Domain */
      url: "https://icon.nucleus-ui.com",
      /* Vercel */
      // url: "https://project-nucleus-icon.vercel.app",
      img: NUCLEUSICONS,
    },
    {
      title: "BizTips",
      desc: "Temukan Tips Praktis untuk Bisnis Anda di BizTips.",
      color: "#772583",
      /* Domain */
      url: "https://biztips.gobiz.co.id",
      /* Vercel */
      // url: "https://gobiz-frontend.vercel.app/biztips",
      img: BIZTIPS,
    },
    {
      title: "Racun Shopee",
      desc: "Mobile app untuk memudahkan seorang affiliator membuat content.",
      color: "#f53d2d",
      /* Domain */
      // url: "?",
      /* Vercel */
      url: "https://racun-shopee.vercel.app/",
      img: RACUNSHOPEE,
    },
    {
      title: "coming soon",
      desc: "",
      color: "transparent",
      /* Domain */
      // url: "?",
      /* Vercel */
      url: "/#",
      img: COMMINGSOON,
    },
  ];

  return (
    <Box mt={"70px"}>
      <Hero url={HERO.src} alt="hero" />
      <Container maxW={"container.xl"} mb={20}>
        <Text
          as="h4"
          textAlign={"center"}
          my={10}
          pt={[0, 0, 0, 10]}
          fontSize={25}
          color={"gray.600"}
        >
          SOME OF MY LATEST WORK
        </Text>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {dummy.map((item, idx) => {
            return (
              <Link key={idx} href={item.url} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Box
                    bg={item.color}
                    color={"white"}
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
                      src={item.img.src}
                      alt={item.title}
                      w="full"
                      h={
                        item.title.toLocaleLowerCase() === "coming soon"
                          ? "300px"
                          : "200px"
                      }
                      objectFit={
                        item.title.toLocaleLowerCase() === "nucleus free icons"
                          ? "fill"
                          : "cover"
                      }
                      objectPosition={"center"}
                    />

                    <Box py={5} p={2}>
                      <Text fontSize={20} fontWeight={600}>
                        {item.title}
                      </Text>
                      <Text>{item.desc}</Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
