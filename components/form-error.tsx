import { AlertTriangle } from "./icons";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if(!message) return null
    return (
        <div className="bg-destructive/15 flex items-center gap-x-2 rounded-sm p-2">
            <AlertTriangle />
            <p className="text-sm text-destructive">{message}</p>
        </div>
    );
}