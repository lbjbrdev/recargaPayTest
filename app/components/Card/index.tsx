import { Container, Label } from './styles';

interface IProps {
    icon: React.ReactNode;
    title: string;
    isDisabled?: boolean;
    onAction?: () => void;
};
export function Card({ title, icon, isDisabled, onAction }: IProps) {
    return (
        <Container 
            activeOpacity={0.6} 
            onPress={onAction} 
            isDisabled={isDisabled}
            disabled={isDisabled}
        >
            {icon}
            <Label>{title}</Label>
        </Container>
    );
};