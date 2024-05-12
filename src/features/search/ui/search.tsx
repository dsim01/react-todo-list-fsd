type TodoSearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function Search({ searchTerm, setSearchTerm }: TodoSearchProps) {
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type='text'
    />
  );
}
