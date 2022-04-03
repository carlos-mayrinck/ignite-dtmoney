import { Summary } from '../Summary';
import { TransitionsTable } from '../TransitionsTable';
import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransitionsTable />
        </Container>
    );
}