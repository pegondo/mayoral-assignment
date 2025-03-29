import Searchbar from 'components/Searchbar/Searchbar';
import { NextPage } from 'next';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [search, setSearch] = useState<string>();

  const handleSearchChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <div>
      <Searchbar placeholder="Buscar" value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default HomePage;
