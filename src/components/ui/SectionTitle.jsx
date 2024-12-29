import PropTypes from 'prop-types';

// Section title component for consistent headings
export default function SectionTitle({ title, className = "" }) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-8 ${className}`}>
      {title}
    </h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};