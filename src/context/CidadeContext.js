import { createContext, useContext, useState } from 'react';

const CidadeContext = createContext(null);

export function CidadeProvider({ children }) {
    const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

    return (
        <CidadeContext.Provider value={{ cidadeSelecionada, setCidadeSelecionada }}>
            {children}
        </CidadeContext.Provider>
    );
}

export function useCidade() {
    return useContext(CidadeContext);
}
