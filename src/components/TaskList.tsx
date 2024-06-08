import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { ITask } from "../interface";
import { removeTask } from "../service/asyncstorage";
import { EditTask } from "./EditTask";
import theme from "../global/styles/theme";

interface IProps {
    item: ITask;
    handleReload: () => void;
}

export const TaskList: React.FunctionComponent<IProps> = ({
    item,
    handleReload,
}) => {
    const [show, setShow] = useState<boolean>(false);

    const del = () => {
        Alert.alert("Excluir tarefa", `${item.title}`, [
            {
                text: "Cancelar",
                style: "cancel",
            },
            {
                text: "Excluir",
                onPress: async () => {
                    await removeTask(item);
                    handleReload();
                },
            },
        ]);
    };

    return (
        <ViewTask>
            <Icon name="trash-bin" onPress={del} />
            <TextTask>{item.title}</TextTask>
            <Icon name="pencil" onPress={() => setShow(true)} />

            <EditTask
                item={item}
                setShow={setShow}
                show={show}
                handleReload={handleReload}
            />
        </ViewTask>
    );
};

const ViewTask = styled.View`
    background-color: ${theme.colors.darkGray};
    margin: 0 5px 15px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

const TextTask = styled.Text`
    font-size: 18px;
    color: ${theme.colors.white};
    text-align: center;
    padding: 6px;
    flex: 1;
    margin: 0 10px;
`;

const Icon = styled(Ionicons)`
    font-size: 20px;
    padding: 1px 5px;
    color: ${theme.colors.principal};
`;
