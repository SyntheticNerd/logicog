import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/Logo";
import { validatePw, validateEmail } from "../../../utils/validation";
import { SignUpStyled } from "./SignUpStyled";
import StdInput from "./StdInput";

const SignUp = () => {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [firstError, setFirstError] = useState<string | null>();
  const firstHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
    if (e.target.value.length < 1) {
      setFirstError("Please enter your first name");
    } else {
      setFirstError("");
    }
  };
  const [last, setLast] = useState("");
  const [lastError, setLastError] = useState<string | null>();
  const lastHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLast(e.target.value);
    if (e.target.value.length < 1) {
      setLastError("Please enter your first name");
    } else {
      setLastError("");
    }
  };

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

  const [confirmError, setConfirmError] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      Object.keys(pwError).find((key) => {
        return pwError[key] === true;
      }) ||
      firstError ||
      lastError ||
      emailError
    ) {
      return;
    }

    fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: first,
          lastName: last,
          email: email,
          password: password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/my-account");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SignUpStyled>
      <Logo />
      <h1>CREATE AN ACCOUNT</h1>
      <p>Complete all fields to create your ID</p>
      <form onSubmit={submitHandler}>
        <StdInput
          onChange={firstHandler}
          error={firstError}
          label='First name'
          value={first}
        />
        <StdInput
          onChange={lastHandler}
          error={lastError}
          label='Last name'
          value={last}
        />
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
        <button>Create</button>
      </form>
      <Link to='/sign-in'>HAVE AN ACCOUNT LOGIN</Link>
    </SignUpStyled>
  );
};

export default SignUp;
