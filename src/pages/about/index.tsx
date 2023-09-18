import {
  Container,
  Text,
  Box,
  ListItem,
  UnorderedList,
  Flex,
  Image,
  Grid,
} from "@chakra-ui/react";
import Hero from "@src/components/global/hero";
import GLORY from "@assets/level-experience/Glory.jpg";
import MYTHIC from "@assets/level-experience/Mythic.jpg";
import LEGEND from "@assets/level-experience/Legend.jpg";
import EPIC from "@assets/level-experience/Epic.jpg";
import GRANDMASTER from "@assets/level-experience/Grandmaster.jpg";
import HERO from "@assets/img-hero.JPG";
import MONITOR from "@assets/monitor.png";
import { useRouter } from "next/router";

const AboutPage: React.FC = () => {
  const router = useRouter();
  const text = `
    <h1>${router.asPath.replaceAll("/", "")}.</h1>
    <h3>I'm a front-end developer based on DKI Jakarta, Indonesia.<h3/>
    <p>
      Since 2022 I've known programs to explore HTML, CSS, and javascript. </br>
      I focused on studying at the <a target="_blank" rel="noopener noreferrer" href="https://dumbways.id/">Dumbways.id</a> bootcamp.</br>
      I currently work as a frontend developer at <a target="_blank" rel="noopener noreferrer" href="https://studioalva.co/">studioalva.co.</a>
    <p/>
  `;

  const category = [
    {
      title: "Mythic Glory",
      img: GLORY,
    },
    {
      title: "Mythic",
      img: MYTHIC,
    },
    {
      title: "Legend",
      img: LEGEND,
    },
    {
      title: "Epic",
      img: EPIC,
    },
    {
      title: "Grandmaster",
      img: GRANDMASTER,
    },
  ];

  const skills = [
    {
      title: "HTML CSS",
      percentage: "95%",
      color: "#5fb2a8",
    },
    {
      title: "Javascript",
      percentage: "90%",
      color: "#e1ae9e",
    },
    {
      title: "TypeScript",
      percentage: "85%",
      color: "#dfae36",
    },
    {
      title: "Responsive",
      percentage: "95%",
      color: "#bc8e5b",
    },
    {
      title: "Restfull API",
      percentage: "85%",
      color: "#089cd1",
    },
    {
      title: "Reusable Component",
      percentage: "90%",
      color: "#ca4544",
    },
    {
      title: "Computational Thinking",
      percentage: "85%",
      color: "#7729c5",
    },
  ];

  return (
    <>
      <Container maxW={"full"} shadow={"md"} pb={20}>
        <Container maxW={"container.xl"}>
          {/* HERO */}
          <Hero about={true} url={HERO.src} alt="hero" text={text} />
        </Container>
      </Container>

      {/* RANDOM FACTS */}
      <Container maxW={"full"} bg={"#F5F5F5"} mt={1} shadow={"md"}>
        <Container
          maxW={"container.xl"}
          display={["grid", "grid", "flex", "flex"]}
          gap={[0, 0, 0, 10]}
          justifyContent={"space-between"}
          color={"gray.600"}
          mt={[0, 0, 0, 30]}
          mb={[30]}
        >
          <Box w={"full"} h={"500px"} overflow={"hidden"}>
            <Image
              src={MONITOR.src}
              alt="screen"
              w={"full"}
              h={"full"}
              objectFit={"cover"}
            />
          </Box>
          <Flex
            flexDir={"column"}
            mt={[10, 10, 10, 20]}
            w={"full"}
            className="dangerouslySetInnerHTML"
            textAlign={["center", "center", "center", "start"]}
          >
            <Text as={"h3"}>Random facts</Text>
            <Text as={"p"}>
              I like to drink milk tea <br />
              I&apos;m interested in a challenge <br />
              my hobby to play basketball <br />
              I like to work flexibility <br />
              I want to live in Japan <br />I like to take time to study and
              read
            </Text>
          </Flex>
        </Container>
      </Container>

      {/* SKILLS */}
      <Container
        maxW={"full"}
        bg={"#FAFAFA"}
        pt={[10, 10, 10, 20]}
        pb={10}
        my={1}
        shadow={"md"}
      >
        <Container maxW={"container.xl"}>
          <Text as={"h1"} fontSize={30} textAlign={["center", "center", "center", "center", "end"]}>
            My skills
          </Text>

          <Box
            position={"relative"}
            display={["none", "none", "none", "none", "flex"]}
            alignContent={"end"}
            minH={"600px"}
            overflow={"hidden"}
            borderBottom={"1px"}
          >
            <UnorderedList display={"grid"} whiteSpace={"nowrap"} w={"full"}>
              {category.map((item, idx) => {
                return (
                  <ListItem key={idx} w={"full"} fontSize={30}>
                    <Image
                      position={"absolute"}
                      src={item.img.src}
                      alt={item.title}
                      w={"50px"}
                      h={"50px"}
                      className="chart-category"
                    />
                    <Text
                      ml={"50px"}
                      color={"gray.600"}
                      className="chart-category"
                      fontSize={"25px"}
                    >
                      {item.title}
                    </Text>
                  </ListItem>
                );
              })}
            </UnorderedList>

            <Flex
              borderLeft={"1px"}
              borderColor={"gray.300"}
              bg={"transparent"}
              display={"flex"}
              justifyContent={"center"}
              bottom={0}
              right={0}
              position={"absolute"}
              alignItems={"end"}
              gap={["20px", "20px", "20px", "20px", "40px"]}
              h={"full"}
              w={["80%", "80%", "80%", "82%", "84%"]}
              top={"23px"}
            >
              {skills.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    bg={item.color}
                    maxW={["100px"]}
                    minW={["100px"]}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"end"}
                    h={item.percentage}
                    roundedTop={"md"}
                    color={"white"}
                    textAlign={"center"}
                  >
                    <Text fontSize={["50px"]} overflow={"hidden"} px={5}>
                      {item.percentage}
                    </Text>
                    <Text
                      fontSize={["20px"]}
                      overflow={"hidden"}
                      pb={10}
                      px={5}
                    >
                      {item.title}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>

          <Box
            display={["grid", "grid", "grid", "grid", "none"]}
            gap={2}
            borderLeft={"1px"}
            borderBottom={"1px"}
            borderColor={"#cbd5e0"}
            mt={10}
          >
            {skills.map((item, idx) => {
              return (
                <Flex key={idx}>
                  <Box
                    bg={item.color}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    h={"50px"}
                    w={item.percentage}
                    roundedRight={"md"}
                    color={"white"}
                    overflow={"hidden"}
                  >
                    <Text pl={5} fontSize={["20px"]}>{item.title}</Text>
                    <Text
                      whiteSpace={"nowrap"}
                      fontSize={["20px"]}
                      overflow={"hidden"}
                      pr={5}
                    >
                      {item.percentage}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default AboutPage;
