import classNames from 'classnames';

export default function Alert({ title, message, level }: Alert) {
  return (
    <div
      className={classNames(
        'border rounded p-4 my-1 text-base mb-4',
        level === 'info' && 'text-blue-950 bg-blue-300 border-blue-900',
        level === 'warn' && 'text-yellow-800 bg-yellow-100 border-yellow-800',
        level === 'error' && 'text-red-800 bg-red-100 border-red-800',
        level === 'commentary' && 'text-gray-800 bg-gray-100'
      )}
    >
      {title && <p className="font-bold">{title}</p>}
      {message}
    </div>
  );
}
