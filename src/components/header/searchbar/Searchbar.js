import axios from '../../API/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { setMainCategory } from '../../../redux/actions/productActions';

const Searchbar = ({ searchBarVisible, setSearchBarVisible, setMainCategory }) => {
    let Navigate = useNavigate();
    const [value, setValue] = useState('')
    const [searchList, setSearchList] = useState([])
    const handleSearch = (event) => {
        setValue(event.target.value)
    }
    const navigate = (id, category) => {
        setMainCategory(true)
        Navigate(`/shop/${category.id}/product/${id}/`)
        setSearchBarVisible(false)
    }
    useEffect(() => {
        let isMounted = true
        if (isMounted && value.length !== 0) {
            const fetchSearchItem = async () => {
                try {
                    const response = await axios.get(`/api/v1/search/product/${value}/`)
                    setSearchList(response.data)
                }
                catch (error) {
                    throw error
                }
            }
            fetchSearchItem()
        }
        return () => {
            isMounted = false
        }
    }, [value])
    if (!searchBarVisible) {
        return <></>
    }

    return (
        <div className={searchBarVisible ? 'search_box search_box_open' : 'search_box'}>
            <div className='closeFreeclick' onClick={setSearchBarVisible}></div>
            <div className="search_block">
                <h3>Explore more with us</h3>
                <div className="search_field">
                    <input type="search" value={value} onChange={handleSearch} placeholder="Search Here" />
                    <button className='d-none'>search</button>
                </div>
                {
                    searchList.length !== 0 ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '250px',
                            backgroundColor: '#fff',
                            overflow: 'auto',
                            borderRadius:'10px',
                            marginTop: '20px',
                        }}>
                            {
                                searchList.map((items, i) => {
                                    const { id, name, images, category } = items;
                                    return (
                                        <button
                                            style={{
                                                color: 'black'
                                            }}
                                            key={i}
                                            onClick={() => navigate(id, category)}
                                        >
                                            <div style={{
                                                display: 'flex',
                                                paddingTop: '20px',
                                                paddingLeft: '20px',
                                                width: '100%',
                                                textAlign: 'left',
                                            }}>
                                                <img style={{
                                                    height: '50px',
                                                    width: '50px',
                                                    marginRight: '20px'
                                                }} src={process.env.REACT_APP_BASE_URL + images[0]?.image} alt={name} />
                                                <div>
                                                    <h4 style={{fontSize: '16px'}}>
                                                        {name}
                                                    </h4>
                                                    <h4 style={{fontSize: '14px',textAlign:'left'}}>
                                                        {category.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })
                            }
                        </div> :
                        undefined
                }
            </div>
            <span className="search_close" onClick={setSearchBarVisible}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 47.971 47.971"
                    viewBox="0 0 47.971 47.971"
                >
                    <path
                        fill="#fff"
                        d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"
                    ></path>
                </svg>
            </span>
        </div >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean))

    };
};
export default connect(null, mapDispatchToProps)(Searchbar)