import React from "react";
import {
  Box,
  HStack,
  Link,
  IconButton,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { Lightning, ShoppingCart, SignIn, SignOut, User } from "phosphor-react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";
import LoginModal from "./LoginModal";
const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Box p={4} bg={"gray.50"}>
      <Flex justify={"space-between"}>
        <Link end as={NavLink} to="/" p={2}>
          <IconButton
            rounded="full"
            size="lg"
            aria-label="Search database"
            colorScheme={"blue"}
            icon={<Lightning />}
          />
        </Link>
        <HStack spacing={8} fontWeight="semibold">
          <Link
            end
            as={NavLink}
            to="/todo-lists"
            p={2}
            _activeLink={{ color: "blue.500" }}
          >
            Todo Lists
          </Link>
          <Link
            end
            as={NavLink}
            to="/grocery-list"
            p={2}
            _activeLink={{ color: "blue.500" }}
          >
            Grocery List
          </Link>
          <Link
            end
            as={NavLink}
            to="/contact"
            p={2}
            _activeLink={{ color: "blue.500" }}
          >
            About
          </Link>
        </HStack>
        <HStack>
          <HStack>{isLoggedIn ? <LogoutButton /> : <LoginModal />}</HStack>
          <HStack>
            <Link as={NavLink} to="/account">
              <IconButton aria-label="Account" icon={<User />} />
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
