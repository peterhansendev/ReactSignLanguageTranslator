import withAuth from "../hoc/withAuth";
import Nav from "./Nav/Nav"; 
import Profile from "../Components/Profile/Profile"

const ProfileView = () => {
    return (
        <>
            <Nav />
            <Profile />
        </>
    )
}
export default withAuth(ProfileView) 