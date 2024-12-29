import PropTypes from 'prop-types';

// Social media link component
export default function SocialLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                 transition-colors duration-200"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};