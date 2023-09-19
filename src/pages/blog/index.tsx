import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

const BlogPage: React.FC = ({ blogs }: any) => {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
  };
  return (
    <Container maxW={"container.xl"} mb={20} mt={"140px"}>
      <Box mb={20}>
        <Text as={"p"} fontSize={[20, 20, 20, 25]} fontWeight={800}>
          Blog
        </Text>
        <Text as={"h1"} fontSize={[50, 50, 50, 80]} fontWeight={300}>
          My daily notes on the learning process and the problems I often
          encounter
        </Text>
      </Box>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
        {blogs?.map((item: any, idx: number) => {
          return (
            <Link key={idx} href={`/blog/${item.slug.current}`}>
              <Image
                src={urlFor(item.coverImage.asset._ref)
                  .height(1000)
                  .width(2000)
                  .url()}
                alt={item.coverImage.asset._ref}
                rounded={"md"}
              />

              <Flex justifyContent="space-between">
                <Heading
                  as="h2"
                  fontSize={18}
                  fontWeight={600}
                  mb={1}
                  color="blue.500"
                  letterSpacing="-.3px"
                  className="line-clamp"
                >
                  {item.title}
                </Heading>
              </Flex>
              <Text fontSize={14} color="ink.900">
                {item.excerpt}
              </Text>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default BlogPage;

const client = createClient({
  projectId: "ygoj9xy6",
  dataset: "production",
  /* YY - MM - DD */
  apiVersion: "2023-07-10",
  useCdn: true,
});

export async function getStaticProps() {
  const blogs = await client.fetch(`*[_type == "blogs"]`);

  return {
    props: {
      blogs,
    },
    revalidate: 10, // In seconds
  };
}
