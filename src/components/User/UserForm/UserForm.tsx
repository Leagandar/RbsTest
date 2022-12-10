import { useState, useReducer, FormEvent } from "react";
import { Button, Input, Select } from "../../UI";
import { getOrganizationsPairs } from "../../../utils/organizationService";
import {
  getFormInputsValidity,
  parseUserForm,
} from "../../../utils/userService";
import {
  userReducer,
  USER_INFO_CHANGE,
  type UserAction,
  type UserFormType,
} from "./userFormReducer";
import { userFields } from "./userFormData";
import type { User } from "../../../types";
import styles from "./UserForm.module.css";

interface UserFormProps {
  onSubmitHandler: (user: User | null) => void;
  onCancelHandler: () => void;
  user: User | null;
}

type BooleanKeys<T> = { [Property in keyof T]: boolean };
type UserFormValidity = BooleanKeys<Omit<UserFormType, "id">>;

const defaultInputsValidity = {
  firstName: true,
  lastName: true,
  organizationId: true,
  middleName: true,
  email: true,
};

const UserForm = ({
  onSubmitHandler,
  onCancelHandler,
  user,
}: UserFormProps) => {
  const initialUserFormValue = user
    ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        organizationId: user.organizationId.toString(),
        email: user.email,
      }
    : {
        id: Math.random(),
        firstName: "",
        lastName: "",
        middleName: "",
        organizationId: null,
        email: "",
      };

  const [userForm, dispatchUserAction] = useReducer(
    userReducer,
    initialUserFormValue
  );
  const [formInputsValidity, setFormInputsValidity] =
    useState<UserFormValidity>(defaultInputsValidity);

  const userInfoChangeHandler = (
    value: UserAction["payload"]["value"],
    key: UserAction["payload"]["key"]
  ) => {
    dispatchUserAction({
      type: USER_INFO_CHANGE,
      payload: { key, value },
    });
  };

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, organizationId, email } =
      getFormInputsValidity(userForm);
    setFormInputsValidity((prev) => ({
      ...prev,
      firstName,
      lastName,
      organizationId,
      email,
    }));

    const isValidForm = firstName && lastName && organizationId && email;

    if (!isValidForm) {
      return;
    }

    const userItem = parseUserForm(userForm);
    onSubmitHandler(userItem);
  };

  const resetInputsValidity = () =>
    setFormInputsValidity(defaultInputsValidity);

  const inputNodes = userFields.map(({ id, label }) => (
    <Input
      id={id}
      key={id}
      invalid={!formInputsValidity[id as keyof UserFormValidity]}
      type="text"
      label={label}
      value={userForm[id]?.toString() ?? ""}
      style={{ marginBottom: "0.5rem" }}
      maxLength={30}
      onChangeHandler={(e) => userInfoChangeHandler(e.target.value, id)}
      onBlur={resetInputsValidity}
    />
  ));

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles.infoContainer}>
        {inputNodes}
        <Select
          id="organizationId"
          label="Organization"
          invalid={!formInputsValidity.organizationId}
          value={userForm.organizationId ?? ""}
          onChange={(value) => userInfoChangeHandler(value, "organizationId")}
          defaultValue="Organization"
          options={getOrganizationsPairs()}
          resetInputsValidity={resetInputsValidity}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="small" type="submit">
          OK
        </Button>
        <Button size="small" onClick={onCancelHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
