import { Explore } from "../components/templates";
import { useDAOs } from "../data/hooks";

const HomePage = () => {
  const daos = useDAOs();

  const { loading, data } = daos;

  return <Explore daos={data} loading={loading} />;
};

export default HomePage;
