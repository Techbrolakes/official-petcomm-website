import { Modal, Button, Group, Input } from "@mantine/core";
import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
const MessageModal = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        centered
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Book A Free Consultancy Today"
      >
        <Stack spacing={8} textStyle="p">
          <Input placeholder="Enter Name" />
          <Input placeholder="Enter Email" />
          <Input placeholder="Enter Phone Number" />
          <Button color="red">Book Now</Button>
        </Stack>
      </Modal>
      <Group position="center">
        <Button size="lg" color="red" onClick={() => setOpened(true)}>
          Book A Free Consultancy
        </Button>
      </Group>
    </>
  );
};

export default MessageModal;
