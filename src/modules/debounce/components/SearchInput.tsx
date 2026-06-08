type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded p-3"
    />
  );
};

export default SearchInput;
