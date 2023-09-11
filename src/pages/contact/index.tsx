import { Container } from "@chakra-ui/react";
import Hero from "@src/components/global/hero";
import HERO from "@assets/contact.JPG";
import { useRouter } from "next/router";
import IG from "@assets/instagram.png";
import MAIL from "@assets/gmail.png";
import FB from "@assets/facebook.png";
import TW from "@assets/twitter.png";
import LINKEDIN from "@assets/linkedin.png";
import GITHUB from "@assets/github.png";
import Email from "@src/components/global/email";

const ContactPage: React.FC = () => {
  const router = useRouter();
  const text = `
  <h1>${router.asPath.replaceAll("/", "")}.</h1>
  <h3>Contact me via social media or email below.<h3/>
  `;
  const social = [
    {
      alt: "Gmail",
      src: MAIL,
      url: "mailto:passyah11@gmail.com",
    },
    {
      alt: "Linkedin",
      src: LINKEDIN,
      url: "https://www.linkedin.com/in/passyah-raffi/",
    },
    // {
    //   alt: "Github",
    //   src: GITHUB,
    //   url: "https://github.com/Passyah-studioalva",
    // },
    {
      alt: "Instagram",
      src: IG,
      url: "https://www.instagram.com/passyah_raffi/",
    },
    {
      alt: "Facebook",
      src: FB,
      url: "https://www.facebook.com/passyah11",
    },
    {
      alt: "Twitter",
      src: TW,
      url: "https://twitter.com/passyah6499",
    },
  ];

  return (
    <>
      <Container maxW={"full"} shadow={"md"} pb={20}>
        <Container maxW={"container.xl"}>
          {/* HERO */}
          <Hero
            about={true}
            url={HERO.src}
            social={social}
            alt="hero"
            text={text}
          />
        </Container>
      </Container>
      <Container maxW={"full"} bg={"#F5F5F5"} mt={1} shadow={"md"} pb={'150px'}>
        <Container
          maxW={"container.xl"}
          display={"flex"}
          gap={10}
          justifyContent={"space-between"}
          color={"gray.600"}
          mt={20}
        >
          <Email />
        </Container>
      </Container>
    </>
  );
};

export default ContactPage;
