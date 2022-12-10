import styles from "./Select.module.css";

interface SelectOptions {
  value: string;
  name: string;
}

interface SelectProps {
  options: SelectOptions[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
  invalid: boolean;
  resetInputsValidity: () => void;
}

const Select = ({
  options,
  defaultValue,
  value,
  onChange,
  id,
  label,
  invalid,
  resetInputsValidity,
}: SelectProps) => {
  const selectClassList = [styles.select];
  if (invalid) {
    selectClassList.push(styles.invalidSelect);
  }

  const optionNodes = options.map(({ value, name }) => (
    <option key={value} value={value}>
      {name}
    </option>
  ));

  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={id}>{label}:</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={selectClassList.join(" ")}
        onBlur={resetInputsValidity}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {optionNodes}
      </select>
    </div>
  );
};

export default Select;
