import { Container, Text, Box, Flex, Image, Center } from "@chakra-ui/react";
import Hero from "@src/components/global/hero";
import HERO from "@assets/img-hero.JPG";
import MONITOR from "@assets/monitor.png";
import { useRouter } from "next/router";
import { useState } from "react";

const AboutPage: React.FC = () => {
  const router = useRouter();
  const mySkills = [
    {
      src: "./skills/html.png",
      title: "HTML",
    },
    {
      src: "./skills/js.png",
      title: "Javascript",
    },
    {
      src: "./skills/vue.png",
      title: "Vuejs",
    },
    {
      src: "./skills/react.png",
      title: "Reactjs",
    },
    {
      src: "./skills/tailwind.png",
      title: "Tailwind CSS",
    },
    {
      src: "./skills/api.png",
      title: "Restfull API",
    },
    {
      src: "./skills/ts.png",
      title: "Typescript",
    },
    {
      src: "./skills/nuxtjs.png",
      title: "Nuxtjs",
    },
    {
      src: "./skills/nextjs.png",
      title: "Nextjs",
    },
    {
      src: "./skills/chakraui.png",
      title: "Chakra UI",
    },
    {
      src: "./skills/css.png",
      title: "CSS",
    },
  ];
  const text = `
    <h1>${router.asPath.replaceAll("/", "")}.</h1>
    <h3>I'm a front-end developer based on DKI Jakarta, Indonesia.<h3/>
    <p>
      Since 2022 I've known programs to explore HTML, CSS, and Javascript. </br>
      I focused on studying at the <a target="_blank" rel="noopener noreferrer" href="https://dumbways.id/">Dumbways.id</a> bootcamp.</br>
      I currently work as a frontend developer at <a target="_blank" rel="noopener noreferrer" href="https://studioalva.co/">studioalva.co.</a>
    <p/>
  `;
  const htmlCode = `<pre class="code">
    &lt;!DOCTYPE html>
    &lt;html lang="en">
      &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />    
        &lt;title>My Website&lt;/title>
      &lt;/head>
      &lt;body>
        &lt;h1>Hello, World!&lt;/h1>
        &lt;button onclick="showAlert()">Click me&lt;/button>

        &lt;script>
          function showAlert() {
            alert("Hello, world!");
          }
        &lt;/script>
      &lt;/body>
    &lt;/html>
  </pre>`;

  const defaultValue = "My Skills";
  const [hover, setHover] = useState(defaultValue);
  const [images, setImages] = useState("");

  function toggleHover(e: string, img?: any) {
    setImages(img?.getElementsByTagName("img")[0].src);
    setHover(e);
  }

  return (
    <Box mt={"70px"}>
      <Container maxW={"full"} shadow={"md"} pb={[10, 10, 10, 20]}>
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
          gap={[0, 0, 0, 10]}
          justifyContent={"space-between"}
          flexDir={["column", "column", "row", "row"]}
          color={"gray.600"}
          pt={10}
          pb={[10, 10, 10, 20]}
        >
          <Box w={"full"} h={"full"} overflow={"hidden"}>
            <Image
              src={MONITOR.src}
              alt="screen"
              w={"full"}
              h={["300px", "300px", "300px", "500px"]}
              objectFit={"cover"}
              className="skeleton-box"
              loading="lazy"
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
              My hobby to play Basketball <br />
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
        py={10}
        mt={1}
        shadow={"md"}
        className="container-parent-skills"
      >
        <Container maxW={"container.xl"}>
          <Flex position={"relative"} className="pc-custom">
            <Box rounded={"8px 8px 0 0"} bg={"black"} className="lcd" p={"5px"}>
              <Box position={"relative"}>
                {/* <Textarea id="htmlCode">{htmlString}</Textarea> */}
                <Box
                  id="htmlCode"
                  dangerouslySetInnerHTML={{ __html: htmlCode }}
                  overflowY={"scroll"}
                />

                <Center
                  color={"white"}
                  position={"absolute"}
                  top={"30%"}
                  bottom={"30%"}
                  left={"30%"}
                  right={"30%"}
                  gap={2}
                  textAlign={"center"}
                >
                  {images ? (
                    <Image
                      objectFit={"contain"}
                      src={images}
                      alt="html"
                      w={"30px"}
                      h={"30px"}
                    />
                  ) : (
                    <Text as={"h2"} fontSize={40} fontStyle={"italic"}>
                      &lt; / &gt;
                    </Text>
                  )}
                  <Text as={"h2"} fontSize={30} fontStyle={"italic"}>
                    {hover}
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box
              rounded={"0 0 8px 8px"}
              bg={"#E3E3E3"}
              minH={"35px"}
              className="shadow lcd"
            />
            <Box className="trapezoid" />
            <Box
              minH={"5px"}
              w={"120px"}
              bg={"#E3E3E3"}
              rounded={"50px 50px 0 0"}
            />

            <Flex className="doted-mobile">
              {mySkills.map((item, idx) => {
                return (
                  <Center
                    key={idx}
                    id={item.title}
                    onMouseEnter={(e) =>
                      toggleHover(e.currentTarget.id, e.currentTarget)
                    }
                    onMouseLeave={() => toggleHover(defaultValue)}
                    boxSize={"50px"}
                    className="hover-zoom"
                    rounded={"full"}
                  >
                    <Image
                      objectFit={"contain"}
                      src={item.src}
                      alt="html"
                      w={"30px"}
                      h={"30px"}
                    />
                  </Center>
                );
              })}
            </Flex>

            {/* Doted Left */}
            <div
              id="HTML"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} left={"380px"} bottom={"190px"}>
                <Box
                  position={"absolute"}
                  right={0}
                  top={"-50px"}
                  className="dotted-line-vertical"
                />
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  left={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/html.png"
                    alt="html"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Javascript"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} left={"310px"} top={"400px"}>
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  left={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/js.png"
                    alt="js"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Vuejs"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} left={"260px"} top={"325px"}>
                <Box className="dotted-line-horizontal" w={"9rem"} />
                <Center
                  position={"absolute"}
                  left={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/vue.png"
                    alt="vue"
                    w={"40px"}
                    h={"40px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Reactjs"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} left={"310px"} top={"250px"}>
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  left={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/react.png"
                    alt="react"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Tailwind CSS"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} left={"480px"} top={"190px"}>
                <Box
                  position={"absolute"}
                  top={"-50px"}
                  className="dotted-line-vertical"
                />
                <Box
                  position={"absolute"}
                  right={0}
                  top={"-50px"}
                  className="dotted-line-horizontal"
                  w={"6rem"}
                />
                <Center
                  position={"absolute"}
                  right={"105px"}
                  bottom={"30px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"contain"}
                    src="./skills/tailwind.png"
                    alt="tailwind"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            {/* Doted Right */}
            <div
              id="Restfull API"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"380px"} bottom={"190px"}>
                <Box className="dotted-line-vertical" />
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  right={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/api.png"
                    alt="api"
                    w={"40px"}
                    h={"40px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Typescript"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"310px"} top={"400px"}>
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  right={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/ts.png"
                    alt="ts"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Nuxtjs"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"260px"} top={"325px"}>
                <Box className="dotted-line-horizontal" w={"9rem"} />
                <Center
                  position={"absolute"}
                  right={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"contain"}
                    src="./skills/nuxtjs.png"
                    alt="nuxtjs"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Nextjs"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"310px"} top={"250px"}>
                <Box className="dotted-line-horizontal" w={"6rem"} />
                <Center
                  position={"absolute"}
                  right={"-55px"}
                  bottom={"-20px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/nextjs.png"
                    alt="nextjs"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            <div
              id="Chakra UI"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"480px"} top={"190px"}>
                <Box
                  position={"absolute"}
                  top={"-50px"}
                  className="dotted-line-vertical"
                />
                <Box
                  position={"absolute"}
                  left={0}
                  top={"-50px"}
                  className="dotted-line-horizontal"
                  w={"6rem"}
                />
                <Center
                  position={"absolute"}
                  left={"105px"}
                  bottom={"30px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/chakraui.png"
                    alt="chakraui"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
            {/* Doted Top Center */}
            <div
              id="CSS"
              className="doted"
              onMouseEnter={(e) =>
                toggleHover(e.currentTarget.id, e.currentTarget)
              }
              onMouseLeave={() => toggleHover(defaultValue)}
            >
              <Box position={"absolute"} right={"50%"} top={"190px"}>
                <Box
                  position={"absolute"}
                  top={"-50px"}
                  className="dotted-line-vertical"
                />
                <Center
                  position={"absolute"}
                  right={"-25px"}
                  bottom={"55px"}
                  rounded={"full"}
                  boxSize={"50px"}
                  className="hover-zoom"
                >
                  <Image
                    objectFit={"cover"}
                    src="./skills/css.png"
                    alt="css"
                    w={"40px"}
                    h={"40px"}
                    p={"5px"}
                  />
                </Center>
              </Box>
            </div>
          </Flex>
        </Container>
      </Container>
    </Box>
  );
};

export default AboutPage;
