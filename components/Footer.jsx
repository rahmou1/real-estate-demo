import { Box } from "@chakra-ui/react";
import Link from "next/link";

const today = new Date();
const year = today.getFullYear();
const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    {year}{" "}
    <Link
      href="https://www.rahmou.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rahmou{" "}
    </Link>{" "}
    , Inc.
  </Box>
);

export default Footer;
