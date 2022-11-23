import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/Logo";
import { createCustomer, loginCustomer } from "../../../utils/apiHelpers";
import { validatePw, validateEmail } from "../../../utils/validation";
import { LogInStyled } from "./LogInStyled";
import StdInput from "../../common/input/StdInput";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>();
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(validateEmail(e.target.value));
    if (!validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState<{ [key: string]: boolean }>({
    length: false,
    upperLower: false,
    number: false,
    symbol: false,
  });
  const pwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwError(validatePw(e.target.value));
    setPassword(e.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    loginCustomer(email, password).then((res) => {
      console.log(res);
      navigate("/my-account");
    });
    // createUser( email, password).then(() => {
    //   navigate("/my-account");
    // });
  };

  return (
    <LogInStyled>
      <Logo />
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <form onSubmit={submitHandler}>
        <StdInput
          onChange={emailHandler}
          error={emailError}
          label='Email'
          value={email}
        />
        <StdInput
          type='password'
          value={password}
          onChange={pwHandler}
          error={pwError}
          label='Password'
        />
        <button>LOGIN</button>
      </form>
      <Link to='/sign-up'>CREATE ACCOUNT</Link>
    </LogInStyled>
  );
};

export default LogIn;
