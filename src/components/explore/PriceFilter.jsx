import PropTypes from 'prop-types';
import "./PriceFilter.css";

function PriceFilter({ priceFilter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <label htmlFor="price-filter">Sort by:</label>
      <select id="price-filter" value={priceFilter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
          Select an option
        </option>
        <option value="high-to-low">(Price) Highest to lowest</option>
        <option value="low-to-high">(Price) Lowest to highest</option>
      </select>
    </div>
  );
}

// PropTypes validation
PriceFilter.propTypes = {
  priceFilter: PropTypes.string.isRequired,
  handlePriceFilter: PropTypes.func.isRequired
};

export default PriceFilter;
