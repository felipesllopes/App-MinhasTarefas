import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import theme from "../global/styles/theme";
import { ITask } from "../interface";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground``;

export const Screen = styled.View`
    flex: 1;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: ${theme.colors.white};
    margin: 20px;
    font-weight: bold;
    text-align: center;
`;

export const TextInput = styled.TextInput`
    font-size: 20px;
    background-color: ${theme.colors.gray};
    border-radius: 10px;
    height: 45px;
    padding: 4px 14px;
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.principal};
    border-radius: 10px;
    height: 45px;
    padding: 4px 8px;
    width: 100%;
    margin: 10px 0 20px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    font-size: 22px;
    color: ${theme.colors.white};
    margin: 20px 0;
    border-bottom-width: 2px;
    border-color: white;
    width: 100%;
    text-align: center;
`;

export const FlatListTasks = styled(
    FlatList as new (props: FlatListProps<ITask>) => FlatList<ITask>,
).attrs({
    contentContainerStyle: {
        padding: 10,
    },
})``;

export const EmptyList = styled.Text`
    text-align: center;
    font-size: 18px;
    color: ${theme.colors.white};
    font-style: italic;
`;

export const LoadingTask = styled.ActivityIndicator`
    margin-top: 50%;
`;
