import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const SIZES = {
		small: {
			height: 24,
			width,
		},
		large: {
			height: 32,
			width,
		},
	}
	return (
		<>
			<WrapperD size={SIZES[size]}>
				<Input size={SIZES[size]} type="text" placeholder={placeholder} />
				<IconWrapper size={SIZES[size]}>
					<Icon size={SIZES[size].height / 1.5 + "px"} id={icon} />
				</IconWrapper>
			</WrapperD>
		</>
	)
}

const WrapperD = styled.div`
	position: relative;
	height: ${(props) => props.size.height + "px"};
	color: ${COLORS.gray500};

	&:hover {
		color: ${COLORS.black};
	}

	&::focus {
		color: ${COLORS.black};
	}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	height: ${(props) => props.size.height + "px"};
	width: ${(props) => props.size.width + "px"};
	color: ${COLORS.gray500};
	display: flex;
	padding-left: 6px;
	z-index: 1;

	align-items: center;
	&:hover {
		color: ${COLORS.black};
	}
`

const Input = styled.input`
	width: ${(props) => props.size.width + "px"};
	height: ${(props) => props.size.height + "px"};
	border: none;
	border-bottom: 1px solid black;
	padding: ${(props) => `2px 2px 2px ${props.size.height}px`};
	font-weight: bold;
	z-index: 2;

	&::placeholder {
		content: ${(props) => props.placeholder};
		color: ${COLORS.gray500};
		font-weight: normal;
	}
`

export default IconInput
