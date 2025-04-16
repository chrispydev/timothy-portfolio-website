export default function HighlightText({ highlightText }) {
  return (
    <small className="text-secondary dark:bg-dark dark:text-white bg-primary pt-1 px-2 mx-1 transform -skew-x-12 inline-block">
      {highlightText}
    </small>
  );
}
