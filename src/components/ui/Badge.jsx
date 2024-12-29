import PropTypes from 'prop-types';

// Badge component for displaying tags/labels
export default function Badge({ text, className = "" }) {
  return (
    <span className={`bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full ${className}`}>
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};