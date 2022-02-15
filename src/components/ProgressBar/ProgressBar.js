/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const SIZES = {
	large: {
		"--height": 24 + "px",
		"--barPadding": 4 + "px",
		"--fillRadius": 4 + "px",
	},
	medium: {
		"--height": 24 / 2 + "px",
		"--fillRadius": 8 + "px",
		"--barRadius": 4 + "px",
	},
	small: {
		"--height": 24 / 3 + "px",
		"--fillRadius": 8 + "px",
		"--barRadius": 4 + "px",
	},
}

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size || "large"]

	const Component =
		size === "small"
			? SmallProgressBar
			: size === "medium"
			? MediumProgressBar
			: size === "large"
			? LargeProgressBar
			: LargeProgressBar

	return (
		<Component style={styles}>
			<BarFill style={styles} value={value}></BarFill>
		</Component>
	)
}

const BarBase = styled.div`
	width: 370px;
	border-radius: 8px;
	box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
	background-color: ${COLORS.transparentGray15};
`

const BarFill = styled.div`
	width: 100%;
	height: 100%;
	border-radius: var(--fillRadius);
	background-color: ${COLORS.primary};
	clip-path: polygon(0% 0%, 0% 100%, calc(100% * ${p => p.value} / 100) 100%, calc(100% * ${p => p.value} / 100) 0%);
`

const SmallProgressBar = styled(BarBase)`
	height: var(--height);
	border-radius: ;
`
const MediumProgressBar = styled(BarBase)`
	height: var(--height);
	border-radius: ;
`
const LargeProgressBar = styled(BarBase)`
	height: var(--height);
	padding: var(--barPadding);
`

export default ProgressBar
