import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/Logo";
import { createCustomer, loginCustomer } from "../../../utils/apiHelpers";
import { validatePw, validateEmail } from "../../../utils/validation";
import { LogInStyled } from "./LogInStyled";
import StdInput from "../../common/input/StdInput";
import Loading from "../../layout/Loading";

const LogIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    loginCustomer(email, password)
      .then((res) => {
        console.log(res);
        if (res.error) {
          setLoading(false);
          setEmailError("Please enter a valid email and password");
        } else {
          setLoading(false);
          navigate("/my-account");
        }
      })
      .catch((err) => {
        setLoading(false);
        setEmailError("Please enter a valid email");
      });
    // createUser( email, password).then(() => {
    //   navigate("/my-account");
    // });
  };

  return (
    <LogInStyled>
      <Link to='/'>
        <Logo />
      </Link>
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
        <button>
          {loading ? (
            <div className='loadingWrapper'>
              <Loading height='40px' width='40px' color='black !important' />
            </div>
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
      <Link to='/create-account'>CREATE ACCOUNT</Link>
    </LogInStyled>
  );
};

export default LogIn;
