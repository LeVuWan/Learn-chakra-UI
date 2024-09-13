import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  InfoIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs>
      <TabList mt="40px" p="20px" colorScheme="purple" variant="enclosed">
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: Vu@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              iste alias necessitatibus quisquam voluptates libero!
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Email: Vu@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              iste alias necessitatibus quisquam voluptates libero!
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
