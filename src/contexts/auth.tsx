import type React from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { getUser, signIn as sendSignInRequest } from "../api/auth";
import type { AuthContextType, User } from "../types";

function AuthProvider(props: React.PropsWithChildren<unknown>) {
	const [user, setUser] = useState<User>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const result = await getUser();
			if (result.isOk) {
				setUser(result.data);
			}

			setLoading(false);
		})();
	}, []);

	const signIn = useCallback(async (email: string, password: string) => {
		const result = await sendSignInRequest(email, password);
		if (result.isOk) {
			setUser(result.data);
		}

		return result;
	}, []);

	const signOut = useCallback(() => {
		setUser(undefined);
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, signIn, signOut, loading }}
			{...props}
		/>
	);
}

const AuthContext = createContext<AuthContextType>({
	loading: false,
} as AuthContextType);
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
