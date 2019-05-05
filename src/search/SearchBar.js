import React, {Component} from 'react';
import styles from './SearchBar.css';
import SVG from 'react-inlinesvg';
import KeyImage from './search_icon.svg';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    };

    render() {
        return (
            <div className={styles.searchBar}>
                <form>
                    <SVG src={KeyImage}/>
                    <input
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <hr/>
                </form>
            </div>
        )
    }
}

export default SearchBar;