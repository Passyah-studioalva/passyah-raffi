import {
  Box,
  Center,
  Container,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  const listPage = [
    { title: "about", url: "/about" },
    { title: "book", url: "/book" },
    { title: "portfolio", url: "/portfolio" },
    { title: "blog", url: "/blog" },
    { title: "contact", url: "/contact" },
  ];

  const listSocial = [
    {
      title: "gmail",
      url: `mailto:passyah11@gmail.com?subject=Mail from our Website&body=Hello, Passyah Raffi`,
    },
    { title: "linkedin", url: "https://www.linkedin.com/in/passyah-raffi/" },
    { title: "facebook", url: "https://www.facebook.com/passyah11" },
    { title: "instagram", url: "https://www.instagram.com/passyah_raffi/" },
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
            className="logo"
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
                  <ListItem>{item.title}</ListItem>
                </Link>
              );
            })}
          </UnorderedList>
          <UnorderedList display={"flex"} gap={10}>
            {listSocial.map((item, idx) => {
              return (
                <Link key={idx} href={item.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <ListItem>{item.title}</ListItem>
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
