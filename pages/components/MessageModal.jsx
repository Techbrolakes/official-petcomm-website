import { Modal, Button, Group } from "@mantine/core";
import { Input, Box, Textarea } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const MessageModal = () => {
  const [opened, setOpened] = useState(false);
  const form = useRef();

  const FormSubmit = (e) => {
    e.preventDefault();
    setOpened(false);
    emailjs
      .sendForm(
        "service_lj03gpe",
        "template_ayf1k4m",
        form.current,
        "user_3KRheqFQrxmxuSlAVa2iW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Information has been submitted and we will be in touch with you very soon"
    );
  };
  return (
    <Box textStyle="p">
      <Modal
        centered
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Book A Free Consultancy Today"
      >
        <form onSubmit={FormSubmit} ref={form}>
          <Stack spacing={8} textStyle="p">
            <Box>
              <Input name="Name" placeholder="Enter Name" />
            </Box>

            <Box>
              <Input name="Email" placeholder="Enter Email" />
            </Box>

            <Box>
              <Input name="Phone" placeholder="Enter Phone Number" />
            </Box>

            <Box>
              <Textarea name="Information" placeholder="Enter Message" />
            </Box>

            <Button type="submit" color="red">
              Book Now
            </Button>
          </Stack>
        </form>
      </Modal>
      <Group position="center">
        <Button size="lg" color="red" onClick={() => setOpened(true)}>
          Book A Free Consultancy
        </Button>
      </Group>
    </Box>
  );
};

export default MessageModal;
