import toast from 'react-hot-toast';

export const successNotify = (message: string) =>
  toast.success(message, {
    style: {
      border: '1px solid #484848',
      padding: '12px',
      color: '#484848',
    },
    iconTheme: {
      primary: '#484848',
      secondary: '#fff',
    },
  });

export const errorNotify = (message: string) =>
  toast.error(message, {
    style: {
      border: '1px solid #484848',
      padding: '12px',
      color: '#484848',
    },
    iconTheme: {
      primary: '#ef5350',
      secondary: '#fff',
    },
  });
