import React from "react";
import PropTypes from "prop-types";


const SortDropdown = ({direction, onChange}) => (
<span className="custom-dropdown big">
    <select value={direction} onChange={onChange}>  
        <option value={1}>Hind: Odavamad enne</option>
        <option value={-1}>Hind: Kallimad enne</option>
    </select>
</span>
);

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SortDropdown;