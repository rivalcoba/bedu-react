import '../css/checkmark.css';
import PropTypes from 'prop-types';

function Checkmark(props) {
  return (
    <span className={`checkmark ${props.done ? 'dimmed': ''}`}>
      <div className="checkmark_stem"/>
      <div className="checkmark_kick"/>
    </span>
  )
};

Checkmark.propTypes = {
  done: PropTypes.bool
}

export default Checkmark