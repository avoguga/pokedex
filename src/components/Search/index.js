import React from "react";
import { 
  InputArea,
  Input,
} from './styles';

const { useState } = React;

const Search = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <InputArea>
        <button onClick={onClick}>
          <i class="fas fa-search"></i>
        </button>
        <Input placeholder="What Pokémon are you looking for?" onChange={onChange}/>
      </InputArea>
      
    </div>
  );
};

export default Search;
