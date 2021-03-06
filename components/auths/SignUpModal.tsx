import React, { useState } from "react";
import styled from "styled-components";
import MailIcon from "../../public/static/svg/input/mail.svg";
import PersonIcon from "../../public/static/svg/input/person.svg";
import OpenedEyeIcon from "../../public/static/svg/input/opened-eye.svg";
import ClosedEyeIcon from "../../public/static/svg/input/closed_eye.svg";
import palette from "../../styles/palette";
import Input from "../common/Input";
import Selector from "../common/Selector";
import { daysList, monthList, yearsList } from "../../lib/staticDats";
import Button from "../common/Button";
import { signupAPI } from "../../lib/api/auth";

const Container = styled.div`
  width: 568px;
  height: 614px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .mordal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }

  .sign-up-birthdat-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }

  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.3333%;
    }
  }

  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }
`;

const SingUpModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  //* ???????????? ??? ?????????
  const onChangeBirthYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(event.target.value);
  };
  //* ???????????? ??? ?????????
  const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(event.target.value);
  };
  //* ???????????? ??? ?????????
  const onChangeBirthDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(event.target.value);
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  //* ????????? ?????? ?????????
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  //* ?????? ?????? ?????????
  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  //* ??? ?????? ???
  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };

  //* ???????????? ?????? ???
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const signUpBody = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(
          `${birthDay}-${birthMonth?.replace("???", "")}-${birthDay}`
        ).toISOString(),
      };
      await signupAPI(signUpBody);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <form onSubmit={onSubmitSignUp}>
        <div className="input-wrapper">
          <Input
            placeholder="????????? ??????"
            type="email"
            name="email"
            icon={<MailIcon />}
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="input-wrapper">
          <Input
            placeholder="??????(???:??????)"
            icon={<PersonIcon />}
            value={lastname}
            onChange={onChangeLastname}
          />
        </div>
        <div className="input-wrapper">
          <Input
            placeholder="???(???: ???)"
            icon={<PersonIcon />}
            value={firstname}
            onChange={onChangeFirstname}
          />
        </div>
        <div className="input-wrapper sign-up-password-input-wrapper">
          <Input
            placeholder="???????????? ????????????"
            type={hidePassword ? "password" : "text"}
            icon={
              hidePassword ? (
                <ClosedEyeIcon onClick={toggleHidePassword} />
              ) : (
                <OpenedEyeIcon onClick={toggleHidePassword} />
              )
            }
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <p className="sign-up-birthdat-label">??????</p>
        <p className="sign-up-modal-birthday-info">
          ??? 18??? ????????? ????????? ???????????? ????????? ??? ????????????. ????????? ??????
          ??????????????? ??????????????? ???????????? ????????????.
        </p>
        <div className="sign-up-modal-birthday-selectors">
          <div className="sign-up-modal-birthday-month-selectorl">
            <Selector
              options={monthList}
              disabledOptions={["???"]}
              defaultValue="???"
              value={birthMonth}
              onChange={onChangeBirthMonth}
            />
          </div>
          <div className="sign-up-modal-birthday-day-selector">
            <Selector
              options={daysList}
              disabledOptions={["???"]}
              defaultValue="???"
              value={birthDay}
              onChange={onChangeBirthDay}
            />
          </div>
          <div className="sign-up-modal-birthday-year-selector">
            <Selector
              options={yearsList}
              disabledOptions={["???"]}
              defaultValue="???"
              value={birthYear}
              onChange={onChangeBirthYear}
            />
          </div>
        </div>
        <div className="sign-up-modal-submit-button-wrapper">
          <Button type="submit">????????????</Button>
        </div>
      </form>
    </Container>
  );
};

export default SingUpModal;
