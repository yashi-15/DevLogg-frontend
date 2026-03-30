import toast from 'react-hot-toast';

export const notify = (type, msg) => type === 'success' ? toast.success(msg) : toast.error(msg) ;