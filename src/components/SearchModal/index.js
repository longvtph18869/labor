import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

const SearchModal = ({searchShow, setSearchShow}) => {
    const [search, setSearch] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        setSearch('')
    };

    return (
        <div className="searching active">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-center m-auto">
                        <div className="v1search_form">
                            <form onSubmit={submitHandler}>
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search"
                                       placeholder="Search Here..."/>
                                <button type="submit" className="cbtn1">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="close_btn" onClick={() => setSearchShow(false)}><FontAwesome name="times"/></div>
        </div>
    );
};

export default SearchModal;