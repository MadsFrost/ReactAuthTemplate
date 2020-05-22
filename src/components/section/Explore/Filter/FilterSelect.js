import React from 'react'

const FilterSelect = (props) => {
    console.log(props.values)

    const array = props.values

const options = array.map((item,i) => {return <option key={array[i]} name={array[i]}>{array[i]}</option>})

    return (
        <select>
            {options}
        </select>
    )

}



export default FilterSelect
