import React, {useState} from 'react';


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votecount, setVotecount] = useState(0);

  const handleRefresh =()=>{setSelected(selected + 1)}

  const points = [1, 4, 6, 3]
//variable to copy the points array
  const copy = [...points]
  // increment the value in position 2 by one
  copy[selected] += 1

  const handleVote =()=>{setVotecount(votecount + 1)}


  return (
    <>
    {anecdotes[selected]}
<br/>
    <button onClick={handleRefresh}>
      Refresh
      </button>
    <br/>
      {votecount}
      <br/>
      <button onClick={handleVote}>
        Vote Aecdote
      </button>
    </>
  );
}

export default App;
