function SimpleSpinner({ className }: { className?: string }) {
  return (
    <div
      className={`mx-auto animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-gray-800 ${className}`}
    ></div>
  );
}

export default SimpleSpinner;
