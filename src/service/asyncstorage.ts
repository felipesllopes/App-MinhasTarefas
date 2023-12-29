import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../interface";

const key = "@myTasks";

/**
 * Function to search for items in AsyncStorage.
 * @returns
 */
export const getTasks = async () => {
    const taskList = await AsyncStorage.getItem(key);
    if (taskList) {
        return await JSON.parse(taskList);
    } else {
        return [];
    }
};

/**
 * Function to add items to AsyncStorage.
 * @param data
 */
export const addTask = async (data: ITask) => {
    await getTasks()
        .then(async values => {
            await AsyncStorage.setItem(key, JSON.stringify([...values, data]));
        })
        .catch(error => {
            alert("Erro ao buscar dados da lista");
            console.log(error);
        });
};

/**
 * Function to edit AsyncStorage item.
 * @param value
 * @param id
 */
export const editTask = async (value: string, id: string) => {
    await getTasks().then(async listTasks => {
        const itens = listTasks.filter((element: ITask) => {
            if (element.id == id) {
                return (element.title = value);
            }
            return element;
        });
        await AsyncStorage.setItem(key, JSON.stringify(itens));
        return itens;
    });
};

/**
 * Function to remove AsyncStorage item.
 * @param item
 */
export const removeTask = async (item: ITask) => {
    await getTasks().then(async listTasks => {
        const itens = listTasks.filter((element: ITask) => {
            return element.id != item.id;
        });
        await AsyncStorage.setItem(key, JSON.stringify(itens));
        return itens;
    });
};

