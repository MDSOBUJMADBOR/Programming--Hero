import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({
          selectedPlayers,
          setSelectedPlayers,
          coin,
          setCoin
          }) => {
          console.log(selectedPlayers);

const handleDeleteSelectedPlayer = (player) => {
          console.log('selectedPlayer',selectedPlayers);
          const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
          console.log('filteredPlayers',filteredPlayers);
          setSelectedPlayers(filteredPlayers);
          setCoin(coin + player.price)
}

          return (
                    <div className='space-y-4'>
{
 selectedPlayers.length ===0 ? <div className='h-[400px] flex items-center justify-center  flex-col gap-6'>
          <h2 className='font-semibold text-xl '>No player selected yet</h2>
          <p>Go to Available tab to select players</p>
 </div> :  selectedPlayers.map((player,index) => {
                    return(
                    <div >
                               <div  key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                              <div className='flex items-center gap-6'>
                              <img className='h-[100px] w-[100px] rounded-md' src={player.playerImg} alt={player.playerName} />
                             <div><h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser /> {player.playerName}</h2>
                             <p> {player.playerType}</p></div>

                              </div>
                              <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer(player)} >
                                        <MdDelete />
                              </button>
                    </div>
                    </div>
                    )
          })
}


                    </div>
          );
};

export default SelectedPlayers;