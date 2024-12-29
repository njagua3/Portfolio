import PropTypes from 'prop-types';

export default function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};