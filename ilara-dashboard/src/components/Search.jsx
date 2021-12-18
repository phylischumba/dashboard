import './componentStyles.css';
import { MdSearch } from 'react-icons/md';

const SearchBar = () => (
  <form className="form" action="/" method="get">
    <MdSearch className="search-icon" />
    <input type="text" id="search" placeholder="Search for patients" name="search" />
  </form>
);

export default SearchBar;
