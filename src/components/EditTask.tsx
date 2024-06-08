import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Modal, TextInput } from "react-native";
import styled from "styled-components/native";
import theme from "../global/styles/theme";
import { ITask } from "../interface";
import { editTask } from "../service/asyncstorage";

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
                        <TextButton>SALVAR</TextButton>
                    </Button>
                </Container>
            </Screen>
        </Modal>
    );
};

const Screen = styled.View`
    flex: 1;
    background-color: rgba(50, 50, 50, 0.8);
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    background-color: ${theme.colors.black};
    border-radius: 10px;
    width: 80%;
    padding: 10px;
`;

const CancelEdit = styled(Ionicons)`
    font-size: 25px;
    position: absolute;
    right: 0;
    padding: 4px;
    z-index: 2;
    color: ${theme.colors.white};
`;

const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    color: ${theme.colors.white};
`;

const Item = styled(TextInput)`
    background-color: ${theme.colors.white};
    font-size: 18px;
    margin: 15px 10px 5px;
    border-radius: 5px;
    padding: 6px 10px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.principal};
    margin: 10px;
    border-radius: 5px;
`;

const TextButton = styled.Text`
    font-size: 17px;
    padding: 5px 12px;
    font-weight: 500;
    text-align: center;
`;
