import React, { ChangeEventHandler, useState } from 'react';
import "./SearchBar.css";
import { FiSearch } from 'react-icons/fi';

type SearchBarProps = {
  children?: React.ReactNode
  type?: string
  placeholder?: string
  name?: string
  value?: string
  searchBGColor?: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined 
}

const SearchBar = ({
  children,
  type,
  placeholder,
  name,
  value,
  searchBGColor,
  onChange,
}: SearchBarProps) => {

  return (
      <div className="search--bar">

        <FiSearch className='search--icon' />
        
        <input 
          type={type}
          className={"search--input"}
          style={{
            backgroundColor: searchBGColor ? searchBGColor : '#F8F9FA',
          }}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>

    
  )
}

export default SearchBar