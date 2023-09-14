import {
  Box,
  Center,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import GMAIL from "@assets/icon/gmail.svg";
import LINKEDIN from "@assets/icon/linkedin.svg";
import FB from "@assets/icon/facebook.svg";
import IG from "@assets/icon/instagram.svg";
import TW from "@assets/icon/twitter-1.svg";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const listPage = [
    { title: "about", url: "/about" },
    { title: "portfolio", url: "/portfolio" },
    { title: "blog", url: "/blog" },
    { title: "contact", url: "/contact" },
  ];
  const listSocial = [
    {
      title: "gmail",
      image: GMAIL,
      url: `mailto:passyah11@gmail.com?subject=Mail from our Website&body=Hello, Passyah Raffi`,
    },
    {
      title: "linkedin",
      image: LINKEDIN,
      url: "https://www.linkedin.com/in/passyah-raffi/",
    },
    {
      title: "facebook",
      image: FB,
      url: "https://www.facebook.com/passyah11",
    },
    {
      title: "instagram",
      image: IG,
      url: "https://www.instagram.com/passyah_raffi/",
    },
    {
      title: "twitter",
      image: TW,
      url: "https://twitter.com/passyah6499",
    },
  ];

  return (
    <Box bg={"#111"} color={"gray.100"}>
      <Container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"container.xl"}
        zIndex={100}
        h={"92px"}
      >
        <Link href={"/"}>
          <Center
            rounded={"full"}
            minH={"80px"}
            w={"80px"}
            fontSize={40}
            className="logo animate-hover"
            bg={"white"}
            color={"black"}
          >
            PR
          </Center>
        </Link>
        <Flex justifyContent={"space-between"} gap={40} fontSize={20}>
          <UnorderedList display={"flex"} gap={10}>
            {listPage.map((item, idx) => {
              return (
                <Link key={idx} href={item.url}>
                  <ListItem
                    className="animate-hover"
                    opacity={
                      router.asPath.replaceAll("/", "").toLocaleLowerCase() ===
                      item.title.toLocaleLowerCase()
                        ? 0.4
                        : 1
                    }
                  >
                    {item.title}
                  </ListItem>
                </Link>
              );
            })}
          </UnorderedList>
          <UnorderedList display={"flex"} gap={10}>
            {listSocial.map((item, idx) => {
              return (
                <Link key={idx} href={item.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <ListItem className="animate-hover">
                      <Image
                        src={item.image.src}
                        alt={item.title}
                        w="30px"
                        h="30px"
                        p={idx > 2 ? 1 : 0}
                      />
                    </ListItem>
                  </a>
                </Link>
              );
            })}
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
}
