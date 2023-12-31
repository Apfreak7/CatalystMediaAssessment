export default function Chip({ text, onClose }) {
    return (
      <span className='bg-gray-300 px-2 py-2 text-base font-medium flex items-center justify-between space-x-2'>
        <span>{text}</span>
        <button className='border-0 outline-0 text-sm' onClick={onClose}>
          X
        </button>
      </span>
    );
  }
  