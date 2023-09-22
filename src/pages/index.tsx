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
      color: "#2B569A",
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
          subtitle: "Framework yang digunakan :",
          listDesc: ["VueJs", "NuxtJs"],
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
      color: "#6B4EFF",
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
          subtitle: "Framework yang digunakan :",
          listDesc: ["VueJs v2", "NuxtJs v2"],
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
      color: "#6B4EFF",
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
          subtitle: "Framework yang digunakan :",
          listDesc: ["VueJs", "NuxtJs"],
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
      color: "#772583",
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
          subtitle: "Framework yang digunakan :",
          listDesc: ["ReactJs", "NextJs"],
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
      title: "Racun Shopee",
      subtitle:
        "Mobile app untuk memudahkan seorang affiliator membuat content.",
      color: "#f53d2d",
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
          subtitle: "Framework yang digunakan :",
          listDesc: ["ReactJs", "NextJs"],
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
          {orderData.map((item: any) => {
            return (
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
                  <Text fontSize={20} fontWeight={600}>
                    {item.title}
                  </Text>
                  <Text>{item.subtitle}</Text>
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
    </Box>
  );
};

export default HomePage;
