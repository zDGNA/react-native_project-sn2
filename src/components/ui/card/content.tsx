import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
    style?: StyleProp<ViewStyle>;
}

const CardContent: React.FC<CardContentProps> = ({ children, className, style }) => {
    return (
        <View style={[styles.content, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
});

export default CardContent;