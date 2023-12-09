import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface SearchProps
  extends Omit<TextInputProps, "onChangeText" | "onSubmitEditing"> {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  value: string;
}

export const Search: React.FC<SearchProps> = ({
  onChangeText,
  onSubmitEditing,
  value,
}) => {
  return (
    <Container>
      <SearchCity
        onChangeText={onChangeText}
        value={value}
        placeholder="Search By City"
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const SearchCity = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 95%;
  max-width: 700px;
`;
