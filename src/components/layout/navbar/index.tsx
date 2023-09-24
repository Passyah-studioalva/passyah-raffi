import { useRouter } from "next/router";
import {
  Box,
  Center,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import LINKEDIN from "@assets/icon/linkedin.svg";
import FB from "@assets/icon/facebook.svg";
import IG from "@assets/icon/instagram.svg";
import TW from "@assets/icon/twitter-1.svg";

export default function Navbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listPage = [
    { title: "about", url: "/about" },
    { title: "project", url: "/project" },
    { title: "blog", url: "/blog" },
    { title: "contact", url: "/contact" },
  ];
  const listSocial = [
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
    <Box bg={"#111"} color={"gray.100"} className="sticky-wrap">
      <Container
        display={["none", "none", "none", "flex"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"container.xl"}
        zIndex={100}
        h={"full"}
        py={2}
      >
        <Link href={"/"}>
          <Center
            rounded={"full"}
            minH={"70px"}
            w={"70px"}
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

      <Container
        display={["flex", "flex", "flex", "none"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"container.xl"}
        zIndex={100}
        py={2}
      >
        <Link href={"/"}>
          <Center
            rounded={"full"}
            minH={"55px"}
            w={"55px"}
            fontSize={30}
            className="logo animate-hover"
            bg={"white"}
            color={"black"}
          >
            PR
          </Center>
        </Link>
        <IconButton
          variant="ghost"
          colorScheme="ink"
          aria-label="Call Sage"
          fontSize="30px"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{
            md: "block",
            lg: "none",
          }}
        />
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
          <DrawerOverlay />
          <DrawerContent bgColor={"#111"} color={"gray.100"}>
            <DrawerCloseButton boxSize={"40px"} fontSize="20px" />
            <DrawerBody mt={"150px"}>
              <UnorderedList display={"grid"} gap={"50px"} fontSize={20}>
                {listPage.map((item, idx) => {
                  return (
                    <Link key={idx} href={item.url}>
                      <ListItem
                        className="animate-hover"
                        opacity={
                          router.asPath
                            .replaceAll("/", "")
                            .toLocaleLowerCase() ===
                          item.title.toLocaleLowerCase()
                            ? 0.4
                            : 1
                        }
                        onClick={onClose}
                      >
                        {item.title}
                      </ListItem>
                    </Link>
                  );
                })}
              </UnorderedList>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
}
