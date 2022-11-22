import getAge from '../../js/getAge';
const Home = () => {
  return (
    <div className="home">
      <h1>Konstantin Ulanov</h1>
      <h2>frontend developer</h2>
      <h2>{`${getAge('10.08.1997')} years old`}</h2>
      <img class="myPhoto" src="./images/DSCF0175.jpg" alt="MyPhoto" />
    </div>
  );
};

export default Home;
