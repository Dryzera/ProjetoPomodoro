import { toast } from 'react-toastify';

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
}
