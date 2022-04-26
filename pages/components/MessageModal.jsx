import { Modal, Button, Group } from "@mantine/core";
import { Input, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const MessageModal = () => {
  const [opened, setOpened] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const FormSubmit = function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lj03gpe",
        "template_j5afu7ls",
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
        <form onSubmit={FormSubmit}>
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