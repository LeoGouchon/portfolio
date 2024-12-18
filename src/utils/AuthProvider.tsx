import {createContext, useContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

interface UserInterface {
    id: string | null;
    email: string | null;
    role: string | null;
}

type AuthContextType = {
    user: UserInterface | null;
    login: (token: string) => void;
    logout: () => void;
    isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType>({
    user: {id: null, role: null, email: null},
    login: () => {},
    logout: () => {},
    isAdmin: false,
});

export const AuthProvider = ({ children }:{children: any}) => {
    const [user, setUser] = useState<UserInterface | null>(null);

    const loadUserFromToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded: UserInterface = jwtDecode<UserInterface>(token);
                setUser(decoded); // Stocker les informations utilisateur
            } catch (err) {
                console.error('JWT invalide:', err);
                localStorage.removeItem('token');
                setUser(null);
            }
        } else {
            setUser(null);
        }
    };

    const login = (token: string) => {
        localStorage.setItem("token", token);
        loadUserFromToken();
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const isAdmin = (): boolean => {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            const decoded: UserInterface = jwtDecode<UserInterface>(token);
            return decoded.role === 'admin';
        } catch {
            return false;
        }
    }

    useEffect(() => {
        loadUserFromToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAdmin: isAdmin() }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);