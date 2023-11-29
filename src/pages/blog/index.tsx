import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import { client } from "@src/api";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

const BlogPage: React.FC = ({ blogs }: any) => {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
  };

  const orderData = blogs.sort(
    (a: { order: number }, b: { order: number }) => b.order - a.order
  );

  return (
    <Container
      maxW={"container.xl"}
      mb={20}
      mt={["100px", "100px", "100px", "140px"]}
      minH={"80vh"}
    >
      <Grid gap={[2, 2, 2, 5]} mb={20}>
        <Text as={"p"} fontSize={[20, 20, 20, 25]} fontWeight={800}>
          Blog
        </Text>
        <Text
          as={"h1"}
          className="heading-blog"
          letterSpacing={-1}
          lineHeight={1.1}
          fontSize={[50, 50, 50, 80]}
          fontWeight={300}
        >
          My daily notes on the learning process and the problems I often
          encounter
        </Text>
      </Grid>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
        {orderData?.map((item: any, idx: number) => {
          return (
            <Link
              key={idx}
              href={`/blog/${item.slug.current}`}
              className="animate-hover"
            >
              <Box mb={4}>
                {item.mainImage.asset._ref && (
                  <Image
                    src={urlFor(item.mainImage.asset._ref)
                      .height(1000)
                      .width(2000)
                      .url()}
                    alt={item.mainImage.asset._ref}
                    rounded={"md"}
                    className="skeleton-box"
                    loading="lazy"
                  />
                )}
              </Box>

              <Flex justifyContent="space-between">
                <Heading
                  as="h2"
                  fontSize={18}
                  fontWeight={600}
                  mb={1}
                  color="blue.500"
                  letterSpacing="-.3px"
                  className="line-clamp-2"
                >
                  {item.title}
                </Heading>
              </Flex>
              <Text fontSize={14} color="ink.900" className="line-clamp-4">
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

export async function getStaticProps() {
  const blogs = await client.fetch(
    `*[_type == "${process.env.NEXT_PUBLIC_PASSYAHRAFI_KEY}"]`
  );

  return {
    props: {
      blogs,
    },
    revalidate: 10, // In seconds
  };
}
