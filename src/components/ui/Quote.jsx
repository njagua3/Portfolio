import PropTypes from 'prop-types';

export default function Quote({ text, author }) {
  return (
    <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic">
      <p className="text-lg text-gray-100">"{text}"</p>
      <footer className="mt-2 text-blue-300">- {author}</footer>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};