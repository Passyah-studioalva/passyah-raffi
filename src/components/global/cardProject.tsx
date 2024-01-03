import * as React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  useDisclosure,
  Grid,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import ComponentDrawer from "@components/global/componentDrawer";

interface Props {
  projects?: any;
}

const CardProject: React.FC<Props> = ({ projects }) => {
  const router = useRouter();
  const btnRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = React.useState({});

  const orderData = projects?.sort(
    (a: { order: number }, b: { order: number }) => b.order - a.order
  );

  const project = router.asPath === "/" ? orderData.slice(0, 3) : orderData;

  const handleData = (e: any) => {
    setData(e);
  };

  return (
    <SimpleGrid columns={[1, 1, 3, 3]} spacing={10} minH={"26.5vh"}>
      {project && project.length > 0 ? (
        project?.map((item: any) => {
          return (
            <Box
              ref={btnRef}
              onClick={onOpen}
              key={item.order}
              bg={item.bgColor}
              color={item.color}
              border={item.borderColor && `1px solid ${item.borderColor}`}
              minH="300px"
              maxH="300px"
              rounded={"md"}
              overflow={"hidden"}
              className={"animate-hover"}
            >
              <Image
                onClick={() => {
                  handleData(item);
                }}
                src={item.src.src}
                alt={item.title}
                w="full"
                h={"200px"}
                objectFit={item.objectFit}
                objectPosition={"center"}
                className="skeleton-box"
                bgColor={item.bgColorImg && item.bgColorImg}
                borderBottom={item.borderColor && item.borderColor}
                p={item.paddingImg && item.paddingImg}
                loading="lazy"
              />

              <Grid
                gap={1}
                p={2}
                pt={0}
                onClick={() => {
                  handleData(item);
                }}
              >
                <Text fontSize={20} fontWeight={600} className="line-clamp-1">
                  {item.title}
                </Text>
                <Text className="line-clamp-2">{item.subtitle}</Text>
              </Grid>
            </Box>
          );
        })
      ) : (
        <>
          <Skeleton rounded={"md"} minH="300px" maxH="300px" />
          <Skeleton rounded={"md"} minH="300px" maxH="300px" />
          <Skeleton rounded={"md"} minH="300px" maxH="300px" />
        </>
      )}

      <ComponentDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
        data={data}
      />
    </SimpleGrid>
  );
};

export default CardProject;
