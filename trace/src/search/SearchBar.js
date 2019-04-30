import React, {Component} from 'react';
import styles from './SearchBar.css';

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
                    <img src={require('./search_icon.svg')}/>
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