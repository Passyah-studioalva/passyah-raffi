import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const BlogDetailPage: React.FC = ({ blogs }: any) => {
  const router = useRouter();
  const data = blogs.filter(
    (item: any) => item.slug.current === router.query.slug
  );
  // const desc = data[0]?.body.map((item: any) => item.children[0].text);
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
  };

  const orderData = blogs.sort(
    (a: { number: number }, b: { number: number }) => b.number - a.number
  );

  return (
    <Container
      maxW={"container.xl"}
      mb={20}
      mt={["100px", "100px", "100px", "140px"]}
    >
      <Flex
        alignItems={"center"}
        justifyContent="center"
        width={["full", "full", "full", "960px"]}
        margin={"auto"}
        px={[6, 8, 8, 0]}
      >
        {data[0]?.mainImage.asset._ref && (
          <Image
            src={urlFor(data[0]?.mainImage.asset._ref)
              .height(1000)
              .width(2000)
              .url()}
            alt={data[0]?.mainImage.asset._ref}
            height={["full", "full", "full", "565px"]}
          />
        )}
      </Flex>
      <Container maxW={"container.md"} px={[6, 8, 8, 8, 8]}>
        <Box
          display={["grid", "grid", "flex"]}
          my={5}
          alignItems={"center"}
          gap={2}
        >
          <Text fontSize={[20, 32]} fontWeight={"bold"}>
            {data[0]?.title}
          </Text>
        </Box>
        {data[0]?.body.map((item: any, idx: number) => {
          return (
            <Box key={idx} textAlign={"justify"} className="style-markdown">
              <ReactMarkdown>{item.children[0].text}</ReactMarkdown>
            </Box>
          );
        })}
      </Container>
    </Container>
  );
};

export default BlogDetailPage;

const client = createClient({
  projectId: "iwjwzghi",
  dataset: "production",
  /* YY - MM - DD */
  apiVersion: "2023-11-09",
  useCdn: true,
});

export async function getStaticProps() {
  const blogs = await client.fetch(`*[_type == "passyahRaffi"]`);

  return {
    props: {
      blogs,
    },
    revalidate: 10, // In seconds
  };
}

export const getStaticPaths = async () => {
  const blogs = await client.fetch(`*[_type == "passyahRaffi"]`);

  return {
    paths: blogs?.map(({ slug }: any) => `/blog/${slug}`) || [],
    fallback: "blocking",
  };
};
