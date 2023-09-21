import { useState } from "react";
import {
  // signInWithGooglePopup,
  // createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { Button, Heading, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  userName: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setLoading] = useState(false);
  const { userName, password } = formFields;
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const { user } = await signInAuthUserWithEmailAndPassword(
        userName,
        password
      );
      toast({
        title: "Welcome back!",
        description: "Feel free to drag and drop images",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      navigate("/gallery");

      resetFormFields();
    } catch (error) {
      toast({
        title: "Unauthorized user",
        description: "Please check your username and password and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center h-[100dvh]">
      <div className=" w-[280px] sm:w-[375px] ">
        <Heading className=" text-center pb-7">Welcome back!</Heading>
        <form onSubmit={handleSubmit}>
          <div className=" pb-7">
            <Text>Username</Text>
            <input
              type="email"
              required
              onChange={handleChange}
              name="userName"
              value={userName}
              className="w-full border border-gray-500 outline-none pl-2 rounded-md h-8"
            />
          </div>

          <div className="pb-7">
            <Text>Password</Text>
            <input
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
              className=" w-full border border-gray-500 outline-none pl-2 rounded-md h-8"
            />
          </div>

          <Button
            isLoading={isLoading}
            loadingText="Logging in..."
            type="submit"
            className=" bg-black text-white rounded-md w-full"
            variant="solid"
            colorScheme="black"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
