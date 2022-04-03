import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenTransactionsModal: () => void
}

export function Header({ onOpenTransactionsModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                    onClick={onOpenTransactionsModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}