import logoImg from '../../assets/logo.svg'
import { Content, Container } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dtmoney" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                nova transação
            </button>

            </Content>
        </Container>
    )
}