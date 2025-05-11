import { Bounce, ToastContainer } from 'react-toastify';

type MessageContainerProps = {
    children: React.ReactNode;
};

export function MessageContainer({ children }: MessageContainerProps) {
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                transition={Bounce}
            />
            {children}
        </>
    );
}
