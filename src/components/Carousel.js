import React from 'react';
const Carousel = ({ images }) => {
	const [selected, setSelected] = React.useState(0);
	const handleClick = (number) => {
		if (number === 1) {
			if (selected + 1 < images.length) {
				setSelected((value) => value + 1);
			} else {
				setSelected(0);
			}
		}
		if (number === -1) {
			if (selected - 1 < 0) {
				setSelected(images.length - 1);
			} else {
				setSelected((value) => value - 1);
			}
		}
	};
	return (
		<div className='carousel-container'>
			{images.length > 1 && (
				<div className='leftarrow' onClick={() => handleClick(-1)}>
					<span className='top'></span>
					<span className='bottom'></span>
				</div>
			)}
			<img src={images[selected]} alt='hostel' className='carousel-main' />
			{images.length > 1 && (
				<div className='rightarrow' onClick={() => handleClick(1)}>
					<span className='top'></span>
					<span className='bottom'></span>
				</div>
			)}
		</div>
	);
};

export default Carousel;
