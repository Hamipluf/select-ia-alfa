import { SuccessCheck } from "./icons";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if(!message) return null
    return (
        <div className="bg-cyan-500/15 flex items-center gap-x-2 rounded-sm p-2">
            <SuccessCheck />
            <p className="text-sm text-cyan-500">{message}</p>
        </div>
    );
}