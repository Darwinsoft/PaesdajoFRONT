import { HiOutlineSearch } from 'react-icons/hi'
import { Container } from './styles'

export function SearchBar() {
    return (
        <Container>
            <input 
                type="search"
                placeholder="Pesquisar"
            >
            </input>
            <button>
                <HiOutlineSearch size={20}/>
            </button>
            
        </ Container>
    )
}