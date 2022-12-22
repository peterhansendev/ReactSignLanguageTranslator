import { useEffect, useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
//import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { storageRead } from "../../utils/storage";
import "./Startup.css";

const usernameConfig = {
  required: true,
  minLength: 2,
};
const UserContext = createContext(null);

const useUser = () => {
  return useContext(UserContext); // {user, setUser}
};
const Startup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState(useUser());
  const navigate = useNavigate();

  // Local State
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Side Effects

  useEffect(() => {
    if (user !== null || storageRead(STORAGE_KEY_USER)) {
      navigate("/TranslationView");
      window.location.reload(false);
    }
  }, [user, navigate]);

  // Event Handlers

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(username);
    }
    setLoading(false);
  };

  // Render Functions

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username is too short (min 2 characters)</span>;
    }
  })();

  return (
    <div id="startup">
      <div id="h1h2">
        <h1>Lost in Translation</h1>
        <h2>Get Started</h2>
      </div>

      <form id="form-startup" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="search" id="startup-search">
            <input
              className="form-control"
              id="exampleInputtranslation"
              aria-describedby="username"
              type="Username"
              placeholder="username"
              {...register("username", usernameConfig)}
            />

            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            ></button>
          </div>
        </fieldset>

        <div id="errorMessage">{errorMessage}</div>

        <div id="login-update">
          {loading && <p>Logging in...</p>}
          {apiError && <p>{apiError}</p>}
        </div>
      </form>
    </div>
  );
};

export default Startup;
