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

const ComponentDrawer = ({ isOpen, onOpen, onClose, btnRef, data }: any) => {
  let urlPrev = data.urlDomain ? data.urlDomain : data?.urlVercel;

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
            src={data?.src?.src}
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
                  <Text>{item.descPassyahRaffi}</Text>
                  <UnorderedList className="ul-custom">
                    {data.listDesc.map(
                      (list: any, id: number) =>
                        idx === id && <ListItem key={id}>{list}</ListItem>
                    )}
                  </UnorderedList>
                  {idx === 0 && (
                    <Box ml={4}>
                      {data?.hashtag?.map((tags: any, id: number) => {
                        return (
                          <Flex gap={3} key={id}>
                            {tags.hashtagPassyahRaffi.map(
                              (tag: any, id: number) => (
                                <ListItem
                                  key={id}
                                  bg={"gray.100"}
                                  px={2}
                                  rounded={"full"}
                                  fontSize={14}
                                  letterSpacing={0.5}
                                >
                                  #{tag}
                                </ListItem>
                              )
                            )}
                          </Flex>
                        );
                      })}
                    </Box>
                  )}
                </List>
              );
            })}

            <Flex
              gap={3}
              my={3}
              justifyContent={["start", "start", "start", "end"]}
              alignItems={"center"}
            >
              {urlPrev && urlPrev.length > 0 && (
                <a href={urlPrev} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="solid"
                    className="animate-button-solid"
                    onClick={onClose}
                  >
                    Preview to project
                  </Button>
                </a>
              )}
            </Flex>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ComponentDrawer;
