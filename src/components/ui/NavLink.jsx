import PropTypes from 'prop-types';

// Navigation link component with mobile support
export default function NavLink({ href, label, mobile, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${
        mobile
          ? 'block px-4 py-2'
          : ''
      } text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
         transition-colors duration-200 font-medium`}
    >
      {label}
    </a>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  onClick: PropTypes.func
};