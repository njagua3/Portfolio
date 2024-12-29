import PropTypes from 'prop-types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Card component with animation on scroll
export default function Card({ children, className = "" }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-dark-card
        rounded-lg shadow-sm p-6
        transform transition-all duration-300
        hover:shadow-lg hover:scale-[1.02]
        text-gray-900 dark:text-dark-text
        border border-gray-100 dark:border-dark-border
        ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};