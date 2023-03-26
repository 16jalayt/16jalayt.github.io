import React from 'react';
import styled from "styled-components"

const ImageDiv = styled.div`
    display: flex;
	flex-direction:column;
    align-items:center;
    justify-content: center;
    align:center
`

const ImageObj = styled.img`

`

const Image = (props) => {
    return (
        <ImageDiv>
			<a href={props.href} target="_blank">
				<ImageObj src={props.src} alt="Unhelpful generic description of an image." />
			</a>
			<a href={props.flkr}>Uploaded to Flickr</a>
        </ImageDiv>
    )
}


export default Image