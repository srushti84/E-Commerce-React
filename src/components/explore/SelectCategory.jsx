import PropTypes from 'prop-types';
import { useState } from "react";
import "./SelectCategory.css";

function SelectCategory({ checkBoxState, handleCheckBox }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCategoryClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-category_container">
      <h4 onClick={handleCategoryClick}>Category</h4>
      <div className={isOpen ? "open" : ""}>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-men"
            name="men"
            checked={checkBoxState.men}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-men">Men</label>
        </span>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-women"
            name="women"
            checked={checkBoxState.women}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-women">Women</label>
        </span>
      </div>
    </div>
  );
}

// PropTypes validation
SelectCategory.propTypes = {
  checkBoxState: PropTypes.shape({
    men: PropTypes.bool.isRequired,
    women: PropTypes.bool.isRequired
  }).isRequired,
  handleCheckBox: PropTypes.func.isRequired
};

export default SelectCategory;
