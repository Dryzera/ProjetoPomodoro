import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export class showMessage {
    static success(msg: string) {
        toast.success(msg);
    }
    static warning(msg: string) {
        toast.warning(msg);
    }
    static info(msg: string) {
        toast.info(msg);
    }
    static error(msg: string) {
        toast.error(msg);
    }
    static confirm(data: string, onClosing: (confirmation: boolean) => void) {
        toast(Dialog, {
            data,
            onClose: confirmation => {
                if (confirmation) return onClosing(true);
                return onClosing(false);
            },
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        });
    }

    static dismiss() {
        toast.dismiss();
    }
}
