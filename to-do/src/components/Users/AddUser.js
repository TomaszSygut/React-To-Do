import React, {useState} from "react";
import styled from "styled-components";

const UserForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  & form {
    width: 400px;
    max-width:: 400px;
    padding-left: 10px;
    padding-right: 10px;
    @media(max-width: 768px) {
        width: 80%;
    }
    @media(max-width: 576px) {
        width: 100%;
    }
  }
  & .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  & label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  & input {
    margin-bottom: 15px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 5px;
    border: 1px solid grey;
    border-radius: 5px;
  }
  & button {
      background-color: purple;
      color: white;
      padding: 8px 25px;
      border: none;
  }
`;
const AddUser = (props) => {
   const [userName, setUserName] = useState();
   const [userAge, setUserAge] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

    }
  return (
    <>
      <UserForm>
        <form action="submit" onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age (Years)</label>
            <input type="text" name="age" />
          </div>
          <button type="submit">Add User</button>
        </form>
      </UserForm>
    </>
  );
};

export default AddUser;
