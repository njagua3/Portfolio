import PropTypes from 'prop-types';

export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};