import React, { useState } from "react";
import Eyeball from "../../../images/icons/Eyeball";
import { CollapsibleInput } from "./SignUpStyled";

interface PwError {
  length?: boolean;
  upperLower?: boolean;
  number?: boolean;
  symbol?: boolean;
}

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: PwError | string | null;
  label: string;
  value: string;
  type?: string;
}

const StdInput = ({ onChange, error, label, value, type }: Props) => {
  const [focus, setFocus] = useState(false);
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(false);
    onChange(e);
  };

  const [showPw, setShowPw] = useState(false);

  return (
    <CollapsibleInput collapse={!focus && !(value.length > 1)}>
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          autoComplete='new-password'
          id={label}
          type={type ? (showPw ? "text" : type) : "text"}
          onChange={onChange}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
        />
        {type === "password" && (
          <button type='button' onClick={() => setShowPw((prev) => !prev)}>
            <Eyeball />
          </button>
        )}
      </div>

      {error && typeof error === "object" ? (
        <>
          {error.length && <p>Must be at least 8 character long.</p>}
          {error.upperLower && (
            <p>Must have at least 1 uppercase and 1 lowercase letter.</p>
          )}
          {error.number && <p>Must have at least 1 number.</p>}
          {error.symbol && <p>Must contain a special symbol (!#$%&?*)</p>}
        </>
      ) : (
        <p>{error}</p>
      )}
    </CollapsibleInput>
  );
};

export default StdInput;
