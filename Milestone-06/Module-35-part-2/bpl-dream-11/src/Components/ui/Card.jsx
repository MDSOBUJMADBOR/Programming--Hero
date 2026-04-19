import React, { useState } from 'react';
import { Flag, User } from 'lucide-react';
import { toast } from 'react-toastify';


const Card = ({player,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
  const [isSelected,setIsSelected] = useState(false);
console.log(player.price);
const handleChoosePlayer = () => {
  let newCoin = coin - player.price;
      if(newCoin >= 0 ){
        setCoin(coin - player.price);
      }else{
        toast.error("Not Coin available");
        return;
      }
  
toast.success(`${player.playerName} is selected`)
      setIsSelected(true);
      setSelectedPlayers([...selectedPlayers,player])
      
}

          return (
                  <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player.playerImg} className='max-h-full max-w-full'   alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
          <User></User>
     {player.playerName}</h2>
<div className='flex justify-between items-center gap-2'>
          <div className='flex gap-2 items-center'>
<Flag></Flag>
<p>{player.playerCountry}</p>
          </div>

          <button className='btn'>{player.
playerType}</button>
</div>
 <div className="divider"></div>

<h2 className='font-bold'>{player.rating
}</h2>
<div className='flex justify-between  gap-4 font-bold'>
          <p>{player.battingStyle}</p>
          <p className='text-right'>{player.bowlingStyle}</p>
</div>

    <div className="card-actions justify-between items-center">
          <p className='font-semibold'>Price: {player.price}</p>
      <button className="btn" onClick={handleChoosePlayer}
          disabled={isSelected ? true : false}>
        {isSelected === true ? "Selected" : "Choose Player"}</button>
    </div>
  </div>
              </div>
          );
};

export default Card;