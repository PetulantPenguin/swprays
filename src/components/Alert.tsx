import classNames from 'classnames';

export default function Alert({
  message,
  level,
}: {
  message: string;
  level: string;
}) {
  return (
    <div
      className={classNames(
        'border rounded p-4 my-1 text-base',
        level === 'info' && 'text-blue-950 bg-blue-300 border-blue-900',
        level === 'warn' && 'text-yellow-800 bg-yellow-100 border-yellow-800',
        level === 'error' && 'text-red-800 bg-red-100 border-red-800'
      )}
    >
      {message}
    </div>
  );
}
