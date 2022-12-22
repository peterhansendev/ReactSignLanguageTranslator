import UserProvider from "./UserContext"

const AppContext = ({ childern }) => {

    return (
        <UserProvider>
            {childern}
        </UserProvider>
    )
}

export default AppContext