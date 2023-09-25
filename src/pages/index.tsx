import * as React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Drawer,
  DrawerBody,
  // DrawerFooter,
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
import RACUNSHOPEE from "@assets/img-project/shopee-affiliates.jpg";
import SHOPEX from "@assets/img-project/shopex.jpg";
import SHOPIFY from "@assets/img-project/shopify.png";
import Hero from "@src/components/global/hero";
import HERO from "@assets/home.png";
import ARROW from "@assets/icon/right-arrow.svg";

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
            <Text></Text>
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

              {data?.urlSource && (
                <Link href={data?.urlSource}>
                  {/* <Link href={data?.url} passHref legacyBehavior> */}
                  {/* <a target="_blank" rel="noopener noreferrer"> */}
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    View to source
                  </Button>
                  {/* </a> */}
                </Link>
              )}
            </Flex>
          </Grid>
        </DrawerBody>

        {/* <DrawerFooter></DrawerFooter> */}
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
      subtitle:
        "ACETOURS Singapore - Discover Tours, Attractions, Hotels and more - booking.",
      bg: "#2B569A",
      color: "white",
      urlDomain: "http://pkg.ezbooking.co",
      urlVercel: "https://project-travel-orpin.vercel.app",
      img: ACETOURS,
      desc: [
        {
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk menghandle booking yang menawarkan paket-paket perjalanan dan destinasi yang menarik di seluruh benua, negara, dan kota.",
          ],
          hastag: ["#acetours", "#singapore", "#trip", "#destinations"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["VueJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NuxtJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
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
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini bangun untuk menawarkan jasa yang berbentuk paket-paket dalam meningkatkan produktifitas dan proses yang cepat untuk solusi proyek anda",
          ],
          hastag: ["#nucleusui", "#nucleuslite", "nucleusuikit"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
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
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk memudahakan developer dalam membangun aplikasi menggunakan free icon dengan format svg yang dapat dicopy, didownload, dan dicustom baik dari warna, ukuran, dan ketebalan yang diinginkan didalam website ini.",
          ],
          hastag: ["#freeicons", "#svg", "nucleusicon"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["VueJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NuxtJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
          listDesc: ["TailwindCss", "Typescript"],
        },
      ],
    },
    {
      order: 4,
      title: "BizTips",
      subtitle: "Temukan Tips Praktis untuk Bisnis Anda di BizTips.",
      bg: "#772583",
      color: "white",
      urlDomain: "https://biztips.gobiz.co.id",
      urlVercel: "https://gobiz-frontend.vercel.app/biztips",
      img: BIZTIPS,
      desc: [
        {
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk tips trik mitra penjual gofood dalam menjalankan berbagai macam usahanya dengan panduan-panduan dan rekomendasi dari pusat edukasi Mitra Usaha.",
          ],
          hastag: ["#biztips", "#gobiz", "#mitrausaha"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
          listDesc: ["Chakra UI", "Typescript"],
        },
        {
          subtitle: "Data Base yg digunakan :",
          listDesc: ["Strapi.io"],
        },
      ],
    },
    {
      order: 5,
      title: "Shopex",
      subtitle:
        "Partner handal toko online Shopify Anda - SHOPEX membantu semua jenis kebutuhan toko online Shopify, baik besar maupun kecil, selayaknya tim Anda sendiri.",
      bg: "#F8F6F1",
      color: "black",
      urlDomain: "https://shopex.id/",
      urlVercel: "",
      img: SHOPEX,
      desc: [
        {
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk mengenalkan berbagai macam paket bisnis untuk kebutuhan membangun shopify.",
          ],
          hastag: ["#shopify", "#store", "#shopex"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
          listDesc: ["TailwindCss", "Chakra UI"],
        },
        {
          subtitle: "Data Base yg digunakan :",
          listDesc: ["Sanity.io"],
        },
      ],
    },
    {
      order: 6,
      title: "Racun Shopee",
      subtitle:
        "Mobile app untuk memudahkan seorang affiliator membuat content.",
      bg: "#f53d2d",
      color: "white",
      urlDomain: "",
      urlVercel: "https://racun-shopee.vercel.app/",
      img: RACUNSHOPEE,
      desc: [
        {
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk memudahakan affiliator dalam menggenerate link dari CMS Sanity.io yang di tampilkan ke client-side, agar pembeli shopee dapat dengan mudah mentrigger link yang di tampilkan di UI",
          ],
          hastag: ["#affiliate", "#outfit", "#rekomendasi"],
        },
        {
          subtitle: "Library yang digunakan :",
          listDesc: ["ReactJs"],
        },
        {
          subtitle: "Framework yang digunakan :",
          listDesc: ["NextJs"],
        },
        {
          subtitle: "Component Library yang digunakan :",
          listDesc: ["Chakra UI", "Typescript"],
        },
        {
          subtitle: "Data Base yg digunakan :",
          listDesc: ["Sanity.io"],
        },
      ],
    },
    {
      order: 7,
      title: "Shopify Store",
      subtitle:
        "Shopify adalah platform ecommerce yang ditawarkan oleh Studioalva untuk membangun toko online. Ini memungkinkan Anda menjual secara online dengan situs web Anda sendiri atau secara langsung menggunakan aplikasi tempat penjualan.",
      bg: "#95BF47",
      color: "black",
      urlDomain: "",
      urlVercel: "",
      urlSource: "https://www.shopify.com/",
      img: SHOPIFY,
      desc: [
        {
          subtitle: "Manfaat / tujuan website ini dibangun :",
          listDesc: [
            "Aplikasi ini dibangun untuk mengenalkan berbagai macam paket bisnis untuk kebutuhan membangun shopify.",
          ],
          hastag: ["#shopify", "#store", "#shopex"],
        },
        {
          subtitle: "Kelebihan Shopify :",
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
