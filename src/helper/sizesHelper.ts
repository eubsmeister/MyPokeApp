import { Dimensions } from "react-native"

const Sizes = {
	baseHeight: 840,
	baseWidth: 480,

	horizontalScale: (size: number) => {
		return (Dimensions.get('window').width / Sizes.baseWidth) * size
	},
	verticalScale: (size: number) => {
		return (Dimensions.get('window').height / Sizes.baseHeight) * size
	}
}

export default Sizes