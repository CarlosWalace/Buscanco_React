import React from 'react';
import Main from '../template/Main';
import Map from '../map/Map';

export default props => (
    <Main icon="bus" title="Linhas" subtitle="Busque uma linha disponível.">
      <div className="display-4">Linhas Disponíveis</div>
      <hr />
      
      <div>
        <Map />
      </div>
    </Main>
  );