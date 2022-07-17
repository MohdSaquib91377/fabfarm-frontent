import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { setMainCategory } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Checkcatradio = ({ products, mainCategory, setMainCategory }) => {
    let Navigate = useNavigate();
    let { categoryId } = useParams();
    let { subCategoryID } = useParams();
    const [value, setValue] = useState('');
    const [category, setCategory] = useState([])
    const handleChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === categoryId) {
            setMainCategory(true)
            Navigate(`/shop/${event.target.value}/`)
        }
        else {
            setMainCategory(false)
            Navigate(`/shop/${categoryId}/${event.target.value}/`)

        }
    };
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            products.map((cat) => {
                const { category } = cat
                return setCategory(category)
            })
        }
    })
    useEffect(() => {
        if (mainCategory) {
            setValue(`${category.id}`)
        }
        else{
            setValue(`${subCategoryID}`)

        }
    }, [mainCategory, category])

    if (category.length === 0) {
        return <div>loading</div>
    }
    const { sub_categories } = category;
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel id={category.id} value={category.id} control={<Radio />} label='All' />
                {
                    sub_categories.map((cat, i) => {
                        const { id, name } = cat;
                        return (
                            <FormControlLabel key={i} id={id} value={id} control={<Radio />} label={name} />
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    )
}
const mapStateToProps = (state) => {
    return {
        mainCategory: state.shop.mainCategory,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean))

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkcatradio)