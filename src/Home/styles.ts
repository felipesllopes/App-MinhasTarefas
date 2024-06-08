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
    background-color: rgba(0, 0, 0, 0.85);
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${theme.colors.white};
    margin: 20px 20px 30px;
    text-align: center;
`;

export const TextInput = styled.TextInput`
    font-size: 18px;
    background-color: ${theme.colors.gray};
    border-radius: 7px;
    padding: 7px 14px;
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.principal};
    border-radius: 7px;
    padding: 7.5px 8px;
    margin: 10px 0 20px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    font-size: 20px;
    color: ${theme.colors.white};
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom-width: 2px;
    border-color: white;
    text-align: center;
`;

export const FlatListTasks = styled(
    FlatList as new (props: FlatListProps<ITask>) => FlatList<ITask>,
).attrs({
    contentContainerStyle: {
    },
})``;

export const EmptyList = styled.Text`
    text-align: center;
    font-size: 18px;
    color: ${theme.colors.white};
    font-style: italic;
    margin-top: 10%;
    font-weight: 300;
`;

export const LoadingTask = styled.ActivityIndicator`
    margin-top: 50%;
`;
