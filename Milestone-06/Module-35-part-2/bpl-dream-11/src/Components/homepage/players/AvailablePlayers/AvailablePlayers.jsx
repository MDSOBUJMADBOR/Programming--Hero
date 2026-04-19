import Card from '../../../ui/Card';
import React from 'react';





const AvailablePlayers = ({players,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
          console.log(players);
          return (
                    <div className='container mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          {
          players.map((player,index) => {
         
          return <Card key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
          })
}
</div>


                      

                    </div>
          );
};

export default AvailablePlayers;