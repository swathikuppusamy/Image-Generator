import React from 'react'
import styled from "styled-components";
import {SearchOutlined} from '@mui/icons-material';

const SearchBarContainer=styled.div`
`;
const SearchBar = () => {
  return (
    <SearchBarContainer>
        <SearchOutlined>
            <input />
        </SearchOutlined>
    </SearchBarContainer>
  )
}

export default SearchBar;
