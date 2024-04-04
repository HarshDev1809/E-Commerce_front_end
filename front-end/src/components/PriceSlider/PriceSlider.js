// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `₹ ${value}`;
// }

// export default function PriceSlider() {
//   const [value, setValue] = React.useState([200, 370]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);  };

//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         getAriaLabel={() => 'Price range'}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//       />
//     </Box>
//   );
// }


import "./PriceSlider.css"

function PriceSlider(){

    return <div className="price-slider">
        <form>
            <input type="range" className="slider" id="max-slider"/>
            <input type="range" className="slider" id="min-slider"/>
        </form>
    </div>

}

export default PriceSlider;
