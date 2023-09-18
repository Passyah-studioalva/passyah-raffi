import { Container, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  const listPage = [
    { title: "about", url: "/about" },
    { title: "project", url: "/project" },
    { title: "blog", url: "/blog" },
    { title: "contact", url: "/contact" },
  ];

  return (
    <Container maxW={"full"} bg={"#111"} color={"gray.100"}>
      <Container
        maxW={"container.xl"}
        display={"flex"}
        justifyContent={["center", "center", "center", "space-between"]}
        alignItems={"center"}
        minH={"80px"}
      >
        <Text>© 2023 Muhammad Passyah Abdul Raffi</Text>
        <UnorderedList display={["none", "none", "none", "flex"]} gap={10}>
          {listPage.map((item, idx) => {
            return (
              <Link key={idx} href={item.url}>
                <ListItem className="animate-hover">{item.title}</ListItem>
              </Link>
            );
          })}
        </UnorderedList>
      </Container>
    </Container>
  );
}
