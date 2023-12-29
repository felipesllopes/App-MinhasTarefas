import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Modal, TextInput } from "react-native";
import styled from "styled-components/native";
import { ITask } from "../interface";
import { editTask } from "../service/asyncstorage";
import theme from "../global/styles/theme";

interface IProps {
    item: ITask;
    setShow: (value: boolean) => void;
    show: boolean;
    handleReload: () => void;
}

export const EditTask: React.FunctionComponent<IProps> = ({
    item,
    setShow,
    show,
    handleReload,
}) => {
    const [value, setValue] = useState(item.title);

    const cancel = () => {
        setShow(false);
        setValue(item.title);
    };

    const handleEditTask = async () => {
        await editTask(value, item.id)
            .then(() => {
                setShow(false);
            })
            .then(() => {
                handleReload();
            });
    };

    return (
        <Modal animationType="fade" transparent={true} visible={show}>
            <Screen>
                <Container>
                    <CancelEdit name="close" onPress={cancel} />
                    <Title>Editar tarefa</Title>
                    <Item value={value} onChangeText={setValue} />

                    <Button
                        onPress={handleEditTask}
                        disabled={value == item.title}
                    >
                        <TextButton>Salvar</TextButton>
                    </Button>
                </Container>
            </Screen>
        </Modal>
    );
};

const Screen = styled.View`
    flex: 1;
    width: 100%;
    background-color: rgba(50, 50, 50, 0.8);
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    background-color: ${theme.colors.gray};
    border-radius: 10px;
    width: 70%;
`;

const CancelEdit = styled(Ionicons)`
    font-size: 25px;
    position: absolute;
    right: 0;
    padding: 4px;
    z-index: 2;
`;

const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    margin: 20px;
    font-weight: bold;
`;

const Item = styled(TextInput)`
    background-color: ${theme.colors.darkGray};
    color: white;
    font-size: 20px;
    text-align: center;
    margin: 15px 25px;
    border-radius: 5px;
    padding: 5px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.principal};
    align-self: center;
    margin: 10px;
    border-radius: 5px;
`;

const TextButton = styled.Text`
    font-size: 18px;
    padding: 5px 12px;
    font-weight: bold;
`;
