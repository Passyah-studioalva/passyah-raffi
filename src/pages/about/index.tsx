import {
  Container,
  Text,
  Box,
  ListItem,
  UnorderedList,
  Center,
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Hero from "@src/components/global/hero";
import GLORY from "@assets/level-experience/Glory.jpg";
import MYTHIC from "@assets/level-experience/Mythic.jpg";
import LEGEND from "@assets/level-experience/Legend.jpg";
import EPIC from "@assets/level-experience/Epic.jpg";
import GRANDMASTER from "@assets/level-experience/Grandmaster.jpg";
import MASTER from "@assets/level-experience/Master.jpg";
import ELITE from "@assets/level-experience/Elite.jpg";
import WARRIOR from "@assets/level-experience/Warrior.jpg";
import HERO from "@assets/img-hero.JPG";
import MONITOR from "@assets/monitor.png";
import { useRouter } from "next/router";

const AboutPage: React.FC = () => {
  const router = useRouter();
  const text = `
  <h1>${router.asPath.replaceAll("/", "")}.</h1>
  <p>I'm a front-end developer based on DKI Jakarta, Indonesia.<h3/>
  <p>Since 2022 I've known programs to explore HTML, CSS, and javascript. I focused on studying at the <a target="_blank" rel="noopener noreferrer" href="https://dumbways.id/">Dumbways.id</a> bootcamp and until now I work as a frontend developer team at <a target="_blank" rel="noopener noreferrer" href="https://studioalva.co/">studioalva.co.</a><p/>
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
    // {
    //   title: "Master",
    //   img: MASTER,
    // },
    // {
    //   title: "Elite",
    //   img: ELITE,
    // },
    // {
    //   title: "Warrior",
    //   img: WARRIOR,
    // },
  ];

  const skills = [
    {
      title: "HTML & CSS",
      percentage: "100%",
      color: "#5fb2a8",
    },
    {
      title: "Javascript",
      percentage: "90%",
      color: "#e1ae9e",
    },
    {
      title: "TypeScript",
      percentage: "90%",
      color: "#dfae36",
    },
    {
      title: "Responsive",
      percentage: "80%",
      color: "#bc8e5b",
    },
    {
      title: "Responsive",
      percentage: "80%",
      color: "#ca4544",
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
          display={"flex"}
          gap={10}
          justifyContent={"space-between"}
          color={"gray.600"}
          mt={20}
        >
          <Box w={"full"} h={"500px"} overflow={"hidden"}>
            <Image src={MONITOR.src} alt="screen" w={"full"} h={"full"} />
          </Box>
          {/* <Flex flexDir={"column"} justifyContent={"center"} w={"full"}> */}
          <Flex flexDir={"column"} mt={20} w={"full"}>
            <Text fontSize={45}>Random facts</Text>
            <Text fontSize={25} color={"gray.500"}>
              I like to drink milk tea <br />
              I&apos;m interested in a challenge <br />
              my hobby to play basketball <br />
              I like to work flexibility <br />
              I want to live in Japan <br />I sometimes take time to study
            </Text>
          </Flex>
        </Container>
      </Container>

      {/* SKILLS */}
      <Container
        maxW={"full"}
        bg={"#FAFAFA"}
        pt={20}
        my={1}
        pb={20}
        shadow={"md"}
      >
        <Container maxW={"container.xl"}>
          <Text as={"h1"} fontSize={30} textAlign={"end"}>
            My skills
          </Text>

          <Flex
            position={"relative"}
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
                      ml={"55px"}
                      color={"gray.600"}
                      className="chart-category"
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
              gap={10}
              h={"full"}
              w={"82%"}
              top={"23px"}
            >
              {skills.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    bg={item.color}
                    maxW={"150px"}
                    minW={"150px"}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"end"}
                    h={item.percentage}
                    roundedTop={"md"}
                    color={"white"}
                    textAlign={"center"}
                  >
                    <Text fontSize={80} overflow={"hidden"} px={5}>
                      {item.percentage}
                    </Text>
                    <Text fontSize={25.6} overflow={"hidden"} pb={10} px={5}>
                      {item.title}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default AboutPage;
