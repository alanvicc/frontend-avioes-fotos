import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { usePlaneData } from './hooks/usePlaneData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = usePlaneData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // Adicione este console.log para verificar os dados
  console.log("Data:", data);

  return (
    <div className="container">
      <h1>Galeria Aeronaves</h1>
      <div className="card-grid">
        {data?.map(planeData => 
          <Card
            company={planeData.company} 
            title={planeData.title} 
            image={planeData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>

      <footer>
        &copy; 2023 - Alan Victor Vieira dos Santos
      </footer>
      <footer>
        Versão 1.0.0
      </footer>
    </div>
  )
}

export default App;
