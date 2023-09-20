import { useState } from "react";
import {
  // signInWithGooglePopup,
  // createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { Heading, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  userName: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, password } = formFields;
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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
      });
      navigate("/");

      resetFormFields();
    } catch (error) {
      toast({
        title: "Unauthorized user",
        description: "Please check your username and password and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className=" flex justify-center items-center h-[100dvh]">
      <div className=" w-[280px] sm:w-[375px] ">
        <Text className=" text-center pb-7">Welcome back!</Text>
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

          <div>
            <button
              className=" bg-black text-white p-1 rounded-md w-full h-9"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
