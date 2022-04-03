import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Global } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  return (
    <TransactionsProvider>
      <Global />
      
      <Header onOpenTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

export default App;
