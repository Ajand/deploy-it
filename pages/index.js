import { Home } from "../components/templates";
import { useDAOs } from "../data/hooks";

const HomePage = () => {
  const daos = useDAOs();

  const { loading, data } = daos;

  console.log(data);

  return <Home featuredDAOs={[data[0], data[1], data[2]]} loading={loading} />;
};

export default HomePage;
