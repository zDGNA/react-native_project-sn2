import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MainTabParamList } from '../types/NavigationTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import BrandComponents from "../components/BrandComponents";
import NavigationItemComponents from "../components/NavigationItemComponents";

type HomeScreenProps = BottomTabScreenProps<MainTabParamList, 'Home'>;

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const handleDepartmentPress = () => {
        navigation.navigate('Departemen' as any);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <SafeAreaView style={styles.container}>
                {/* Header dengan gradient */}
                <View style={styles.header}>
                    <BrandComponents />
                </View>

                {/* Bagian Order */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Announcement</Text>
                    <ScrollView
                        contentContainerStyle={styles.horizontalScrollContent}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {[1, 2, 3, 4].map((item, index) => (
                            <View key={index} style={styles.orderItem}>
                                <View style={styles.orderItemImage} />
                                <View style={styles.orderItemDescription}>
                                    <View style={styles.placeholderLine} />
                                    <View style={[styles.placeholderLine, { width: '50%', marginTop: 8 }]} />
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Bagian Department */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Department</Text>
                    <TouchableOpacity
                        style={styles.bannerContainer}
                        onPress={handleDepartmentPress}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.bannerText}>
                            View All Department
                        </Text>
                        <Text style={styles.arrowIcon}>→</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#f8fafc',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 3,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        marginHorizontal: 20,
        marginTop: -30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
        position: 'relative',
    },
    sectionContainer: {
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        paddingHorizontal: 20,
    },
    horizontalScrollContent: {
        paddingHorizontal: 20,
    },
    orderItem: {
        width: CARD_WIDTH,
        height: 140,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginRight: 16,
        flexDirection: 'row',
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    orderItemImage: {
        width: 100,
        height: '100%',
        backgroundColor: '#e2e8f0',
        borderRadius: 12,
        marginRight: 12,
    },
    orderItemDescription: {
        flex: 1,
        paddingVertical: 4,
    },
    bannerContainer: {
        backgroundColor: '#1d04d9ff',
        marginHorizontal: 20,
        borderRadius: 16,
        minHeight: 140,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    bannerText: {
        color: '#ffffff',
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
        fontWeight: '600',
    },
    arrowIcon: {
        color: '#ffffff',
        fontSize: 28,
        marginTop: 8,
    },
    foodSection: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    foodItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    foodItemImage: {
        width: 80,
        height: 80,
        backgroundColor: '#e2e8f0',
        borderRadius: 12,
        marginRight: 16,
    },
    foodItemDescription: {
        flex: 1,
        justifyContent: 'center',
    },
    placeholderLine: {
        height: 12,
        backgroundColor: '#cbd5e1',
        borderRadius: 6,
        width: '85%',
        marginVertical: 2,
    }
});

export default HomeScreen;