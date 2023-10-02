import * as React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Drawer,
  DrawerBody,
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
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import ACETOURS from "@assets/img-project/acetours-img.png";
import NUCLEUSUI from "@assets/img-project/nucleus-ui-img.png";
import NUCLEUSICONS from "@assets/img-project/nucleus-icons-img.png";
import BIZTIPS from "@assets/img-project/biztips-img.png";
import SHOPEX from "@assets/img-project/shopex.jpg";
import RACUNSHOPEE from "@assets/img-project/shopee-affiliates.jpg";
import SHOPIFY from "@assets/img-project/shopify.png";
import Hero from "@components/global/hero";
import HERO from "@assets/home.png";
import ARROW from "@assets/icon/right-arrow.svg";
import STATICDATA from "@src/static/project.json"

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
            objectFit={"cover"}
            objectPosition={"center"}
          />

          <Box py={5}>
            <Text fontSize={20} fontWeight={600}>
              {data?.subtitle}
            </Text>
          </Box>
          <Grid gap={5}>
            {data?.desc?.map((item: any, idx: number) => {
              return (
                <List key={idx}>
                  <Text>{item.subtitle}</Text>
                  <UnorderedList>
                    {item.listDesc.map((list: any, id: number) => {
                      return <ListItem key={id}>{list}</ListItem>;
                    })}
                  </UnorderedList>
                  <Flex gap={3} ml={4}>
                    {item.hastag &&
                      item.hastag.map((tag: any, id: number) => {
                        return (
                          <ListItem
                            key={id}
                            bg={"gray.100"}
                            px={1}
                            rounded={"full"}
                            fontSize={14}
                            letterSpacing={0.5}
                          >
                            {tag}
                          </ListItem>
                        );
                      })}
                  </Flex>
                </List>
              );
            })}

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
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    Preview to production
                  </Button>
                </Link>
              )}

              {data?.urlSource && (
                <Link href={data?.urlSource}>
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    View to source
                  </Button>
                </Link>
              )}
            </Flex>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const HomePage = () => {
  // console.log(STATICDATA);
  
  const btnRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <Box mt={"70px"}>
      <Hero url={HERO.src} alt="hero" />
      <Container maxW={"container.xl"} mb={[10, 10, 10, 20]}>
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
        <SimpleGrid columns={[1, 1, 3, 3]} spacing={10}>
          {orderData.slice(0, 3).map((item: any) => {
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
        <Flex mt={[10]} justifyContent={"end"}>
          <Link href={"/project"}>
            <Center gap={1} className="animate-hover" fontWeight={600}>
              View all project
              <Image src={ARROW.src} w={30} h={30} alt="arrow-right" />
            </Center>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
