import { useState, useEffect } from "react";

import { AddButton } from "../../components/AddButton";
import { SearchBar } from "../../components/SearchBar";

import { api } from '../../services/api'
import { Container } from './styles';

interface ClientsProps {
    id: number;
    name: string;
    andress: Array<{
        id: number;
        andress: string;
        number: number;
        district: string;
        complement: string;
    }>
    telephones: Array<{
        id: number;
        telephone: number;
    }>
    user: {
        id: number;
        cpf?: number;
    }
}


export function ClientList() {
    const [ clients, setClients ] = useState<ClientsProps[]>([]);

    useEffect(() => {
        api.get<ClientsProps[]>('clients/search').then(response => {
            setClients(response.data)
        })
    }, [])

    return (
        <>  
            <SearchBar />
            <AddButton />
            <Container>
                <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>

                {clients.map(props => {
                    return (
                        <tr key={props.id}>
                            <td>{props.name}</td>
                            <td>{props.andress[0].andress}, {props.andress[0].number} - {props.andress[0].district} | {props.andress[0].complement}</td>
                            <td>{props.telephones[0].telephone}</td>
                            <td>{props.user?.cpf}</td>
                        </tr>
                    ) 
                })}
                </tbody>
                </table>
            </Container>
        </>
    )
}
