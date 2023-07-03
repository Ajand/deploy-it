import { Profile } from "../../components/templates";
import { useProfile } from "../../data/hooks";
import { useRouter } from "next/router";

const UserProfilePage = () => {
  const router = useRouter();
  const profile = useProfile(router.query.address);

  const { loading, data } = profile;

  return <Profile loading={loading} user={data} />;
};

export default UserProfilePage;
