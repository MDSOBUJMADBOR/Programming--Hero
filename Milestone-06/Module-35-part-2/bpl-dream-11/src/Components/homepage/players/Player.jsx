import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Player = ({playersPromise,setCoin,coin}) => {

const players = use(playersPromise)

const [selectedType,setSelectedType] = useState("available");
const [selectedPlayers,setSelectedPlayers] = useState([]);

          return (
                    <div className='container mx-auto my-[60px]'>
<div className='flex justify-between items-center mb-[20px]'>
          {selectedType === "available" ? <h2 className='font-bold text-3xl'>Availble Players</h2> : <h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{players.length}) </h2>}
          <div>
          <button onClick={() => setSelectedType("available")} className={`btn ${selectedType === 'available' ? "bg-[#E7FE29]":""}  rounded-r-none rounded-l-xl`}>Available</button>
          <button onClick={() => setSelectedType("selected")} className={`btn ${selectedType === 'selected' ? "bg-[#E7FE29]":""}  rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length}) </button>
          </div>
</div>




                             {selectedType === "available" ?  <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>}
                    </div>
          );
};

export default Player;