import Clock from '../components/Clock';
const App = () => {
  const Cronometro = () =>{
    console.log('Entro en cronometro');
      
  };
  return (
    <section>
      <Clock/>  
      <button onClick={Cronometro}>Pasar a Cronómetro</button>  
    </section>
  )
};

export default App;