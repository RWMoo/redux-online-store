import {
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Envelope, GoogleLogo, Lock, SignIn } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/authSlice";
import * as yup from "yup";

const LoginModal = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be 32 characters or less")
      .required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    resetForm();
    onClose();
    dispatch(login({ email, password })).then(({ error, payload }) => {
      if (error) {
        toast.error(error.message);
      } else {
        const displayName = payload.user.displayName || "";
        toast.info(`Welcome back ${displayName}`);
      }
    });
  };

  return (
    <>
      <IconButton onClick={onOpen} aria-label="Account" icon={<SignIn />} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isValid,
          } = props;
          return (
            <form
              id="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Modal
                size={"sm"}
                isCentered
                isOpen={isOpen}
                onClose={() => {
                  handleReset();
                  onClose();
                }}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack spacing={4}>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <Icon
                              as={Envelope}
                              fontSize="xl"
                              color="gray.300"
                            />
                          }
                        />
                        <Input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="tel"
                          pb={0.5}
                          placeholder="Email address"
                        />
                      </InputGroup>
                      {errors.email && (
                        <Text pt={0} fontSize="sm" color="gray.400">
                          {errors.email}
                        </Text>
                      )}
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children={
                            <Icon as={Lock} fontSize="xl" color="gray.300" />
                          }
                        />
                        <Input
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="password"
                          pb={0.5}
                          placeholder="Password"
                        />
                      </InputGroup>
                      {errors.password && (
                        <Text pt={0} fontSize="sm" color="gray.400">
                          {errors.password}
                        </Text>
                      )}
                    </Stack>
                    <Link
                      as={NavLink}
                      textAlign="right"
                      to="/contact"
                      fontSize="sm"
                      _activeLink={{ color: "blue.500" }}
                    >
                      <Text mt={3}>Not a member?</Text>
                    </Link>
                  </ModalBody>
                  <ModalFooter>
                    <Flex w="full" direction="row" justify={"space-between"}>
                      <Button px={0} variant="outline">
                        <Icon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="24"
                            height="24"
                          >
                            <defs>
                              <path
                                id="A"
                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                              />
                            </defs>
                            <clipPath id="B">
                              <use xlinkHref="#A" />
                            </clipPath>
                            <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
                              <path
                                d="M0 37V11l17 13z"
                                clip-path="url(#B)"
                                fill="#fbbc05"
                              />
                              <path
                                d="M0 11l17 13 7-6.1L48 14V0H0z"
                                clip-path="url(#B)"
                                fill="#ea4335"
                              />
                              <path
                                d="M0 37l30-23 7.9 1L48 0v48H0z"
                                clip-path="url(#B)"
                                fill="#34a853"
                              />
                              <path
                                d="M48 48L17 24l-4-3 35-10z"
                                clip-path="url(#B)"
                                fill="#4285f4"
                              />
                            </g>
                          </svg>
                        </Icon>
                      </Button>
                      <HStack>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button
                          disabled={!isValid}
                          type="submit"
                          form="login-form"
                          colorScheme="blue"
                        >
                          Login
                        </Button>
                      </HStack>
                    </Flex>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginModal;

/*

*/
