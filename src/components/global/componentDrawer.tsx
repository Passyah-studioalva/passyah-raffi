import {
  Box,
  Text,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Grid,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import Link from "next/link";

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
            objectFit={data?.objectFit}
            objectPosition={"center"}
          />

          <Box py={5}>
            <Text fontSize={20} fontWeight={600}>
              {data?.subtitle}
            </Text>
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
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    Preview to production
                  </Button>
                </Link>
              )}

              {data?.urlSource && (
                <Link href={data?.urlSource}>
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    View to source
                  </Button>
                </Link>
              )}
            </Flex>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ComponentDrawer;
