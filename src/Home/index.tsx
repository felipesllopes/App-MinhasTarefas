import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard } from "react-native";
import { TaskList } from "../components/TaskList";
import theme from "../global/styles/theme";
import { ITask } from "../interface";
import { addTask, getTasks } from "../service/asyncstorage";
import {
    Button,
    Container,
    EmptyList,
    FlatListTasks,
    LoadingTask,
    Screen,
    Subtitle,
    TextButton,
    TextInput,
    Title,
    Wallpaper,
} from "./styles";

export const Home: React.FunctionComponent = () => {
    const [newTask, setNewTask] = useState("");
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    useEffect(() => {
        (async () => {
            setTaskList(await getTasks());
            await Ionicons.loadFont().then(() => {
                setLoading(true);
            });
        })();
    }, [setTaskList, reload]);

    const handleReload = () => {
        setReload(current => (current == true ? false : true));
    };

    const addTaskk = async () => {
        if (newTask === "") {
            return;
        }
        const data = {
            id: String(new Date().getTime()),
            title: newTask,
        };
        await addTask(data).then(() => {
            handleReload();
        });

        setNewTask("");
        Keyboard.dismiss();
    };

    return (
        <Container>
            <Wallpaper
                source={require("../img/wallpaper.jpg")}
                style={{ height: windowHeight, width: windowWidth }}
            >
                <Screen>
                    <Title>Minhas tarefas</Title>

                    <TextInput
                        placeholder="Nova tarefa"
                        value={newTask}
                        onChangeText={setNewTask}
                    />

                    <Button onPress={addTaskk} activeOpacity={0.8}>
                        <TextButton>Adicionar</TextButton>
                    </Button>

                    <Subtitle>Lista de tarefas</Subtitle>

                    {!loading ? (
                        <LoadingTask
                            size={"large"}
                            color={theme.colors.white}
                        />
                    ) : (
                        <FlatListTasks
                            data={taskList}
                            renderItem={({ item }) => (
                                <TaskList
                                    item={item}
                                    handleReload={handleReload}
                                />
                            )}
                            ListEmptyComponent={
                                <EmptyList>Sua lista está vazia</EmptyList>
                            }
                        />
                    )}
                </Screen>
            </Wallpaper>
        </Container>
    );
};
