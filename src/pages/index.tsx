import * as React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Grid,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import Link from "next/link";
import ACETOURS from "@assets/img-project/acetours-img.png";
import NUCLEUSUI from "@assets/img-project/nucleus-ui-img.png";
import NUCLEUSICONS from "@assets/img-project/nucleus-icons-img.png";
import BIZTIPS from "@assets/img-project/biztips-img.png";
import RACUNSHOPEE from "@assets/img-project/shopee-affiliates.jpg";
import Hero from "@src/components/global/hero";
import HERO from "@assets/home.png";

const ComponentDrawer = ({ isOpen, onOpen, onClose, btnRef, data }: any) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"md"}
    >
      <DrawerOverlay />
      <DrawerContent bgColor={"gray.300"}>
        <DrawerCloseButton />
        <DrawerHeader>{data?.title}</DrawerHeader>

        <DrawerBody>
          <Image
            src={data?.img?.src}
            alt={data?.title}
            w="full"
            h={"300px"}
            objectPosition={"center"}
          />

          <Box py={5}>
            <Text fontSize={20} fontWeight={600}>
              {data?.title}
            </Text>
            <Text>{data?.desc}</Text>
          </Box>
          <Grid gap={5}>
            <List>
              <Text>Manfaat / tujuan website ini dibangun :</Text>
              <UnorderedList gap={5}>
                <ListItem>
                  aplikasi ini digunakan untuk memudahakan developer dalam
                  membangun aplikasi menggunakan free icon dengan format svg
                  yang dapat dicustom didalam website ini
                </ListItem>
              </UnorderedList>
            </List>

            <List>
              <Text>Framework yang digunakan :</Text>
              <UnorderedList gap={5}>
                <ListItem>VueJs v2</ListItem>
                <ListItem>NuxtJs v2</ListItem>
              </UnorderedList>
            </List>

            <List>
              <Text>Component Library yang digunakan :</Text>
              <UnorderedList gap={5}>
                <ListItem>TailwindCss</ListItem>
                <ListItem>Typescript</ListItem>
              </UnorderedList>
            </List>

            <Flex
              gap={3}
              my={3}
              justifyContent={["start", "start", "start", "end"]}
              alignItems={"center"}
            >
              {data?.urlDomain && (
                <Link href={data?.urlDomain}>
                  <Button
                    colorScheme={"transparent"}
                    borderColor={"black"}
                    variant="outline"
                    className="animate-hover"
                  >
                    Preview to domain
                  </Button>
                </Link>
              )}

              {data?.urlDomain && data?.urlVercel ? <Text>or</Text> : null}

              {data?.urlVercel && (
                <Link href={data?.urlVercel}>
                  {/* <Link href={data?.url} passHref legacyBehavior> */}
                  {/* <a target="_blank" rel="noopener noreferrer"> */}
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    Preview to production
                  </Button>
                  {/* </a> */}
                </Link>
              )}
            </Flex>
          </Grid>
        </DrawerBody>

        {/* <DrawerFooter>

        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

const HomePage = () => {
  const btnRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dummy = [
    {
      order: 1,
      title: "Travel Singapore",
      desc: "ACETOURS Singapore - Discover Tours, Attractions, Hotels and more - booking.",
      color: "#2B569A",
      /* Domain */
      urlDomain: "http://pkg.ezbooking.co",
      /* Vercel */
      urlVercel: "https://project-travel-orpin.vercel.app",
      img: ACETOURS,
    },
    {
      order: 2,
      title: "Nucleus UI",
      desc: "The all-in-one UI kit and Design System for Figma.",
      color: "#6B4EFF",
      /* Domain */
      urlDomain: "https://www.nucleus-ui.com",
      /* Vercel */
      urlVercel: "https://figmaterial-thebuddyman.vercel.app",
      img: NUCLEUSUI,
    },
    {
      order: 3,
      title: "Nucleus Free Icons",
      desc: "Minimal and beautiful open source icons by Nucleus.",
      color: "#6B4EFF",
      /* Domain */
      urlDomain: "https://icon.nucleus-ui.com",
      /* Vercel */
      urlVercel: "https://project-nucleus-icon.vercel.app",
      img: NUCLEUSICONS,
    },
    {
      order: 4,
      title: "BizTips",
      desc: "Temukan Tips Praktis untuk Bisnis Anda di BizTips.",
      color: "#772583",
      /* Domain */
      urlDomain: "https://biztips.gobiz.co.id",
      /* Vercel */
      urlVercel: "https://gobiz-frontend.vercel.app/biztips",
      img: BIZTIPS,
    },
    {
      order: 5,
      title: "Racun Shopee",
      desc: "Mobile app untuk memudahkan seorang affiliator membuat content.",
      color: "#f53d2d",
      /* Domain */
      urlDomain: "",
      /* Vercel */
      urlVercel: "https://racun-shopee.vercel.app/",
      img: RACUNSHOPEE,
    },
    // {
    //   order: 6,
    //   title: "coming soon",
    //   desc: "",
    //   color: "transparent",
    //   /* Domain */
    //   // url: "?",
    //   /* Vercel */
    //   url: "/#",
    //   img: COMMINGSOON,
    // },
  ];
  const [data, setData] = React.useState({});
  const orderData = dummy.sort((a, b) => b.order - a.order);

  const handleData = (e: any) => {
    setData(e);
  };

  return (
    <Box mt={"70px"}>
      <Hero url={HERO.src} alt="hero" />
      <Container maxW={"container.xl"} mb={20}>
        <Text
          ref={btnRef}
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
          {orderData.map((item, idx) => {
            return (
              // <Link key={idx} href={item.url} passHref legacyBehavior>
              // <a target="_blank" rel="noopener noreferrer">
              <Box
                ref={btnRef}
                onClick={onOpen}
                key={item.order}
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
                  onClick={() => {
                    handleData(item);
                  }}
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
              // </a>
              // </Link>
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
    </Box>
  );
};

export default HomePage;
