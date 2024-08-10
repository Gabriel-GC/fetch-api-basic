import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input placeholder="Type your search"className="text-input" type="search" value={searchValue} onChange={handleChange} />
  );
};
