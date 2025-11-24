import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainTabParamList } from '../types/NavigationTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Card from '../components/ui/card/index';
import CardContent from '../components/ui/card/content';
import { SafeAreaView } from "react-native-safe-area-context";

type ProfileScreenProps = BottomTabScreenProps<MainTabParamList, keyof MainTabParamList>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>About Our Company</Text>
            </View>

            <View style={styles.content}>
                <Card style={styles.profileCard}>
                    <CardContent style={styles.cardContentStyle}>
                        <Text style={styles.companyName}>Company</Text>
                        <Text style={styles.profileText}>
                            Perusahaan kami berkomitmen untuk memberikan **layanan terbaik** kepada pelanggan.
                            Didirikan pada tahun *2025*, kami selalu berusaha meningkatkan kualitas produk
                            dan layanan untuk memenuhi kebutuhan Anda. Visi kami adalah menjadi mitra terpercaya
                            Anda dalam mencapai kesuksesan digital.
                        </Text>
                    </CardContent>
                </Card>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © {new Date().getFullYear()} Agung Dagna
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc', // Latar belakang keseluruhan abu-abu muda
    },
    header: {
        paddingTop: 30,
        paddingHorizontal: 24,
        paddingBottom: 20,
        backgroundColor: '#f8fafc',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1d04d9ff',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    aboutCard: {
        // Menggunakan lebar penuh
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    cardContentStyle: {
        padding: 24,
    },
    companyName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 8,
    },
    aboutText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#475569',
        marginBottom: 16,
    },
    footer: {
        padding: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
        backgroundColor: '#ffffff',
    },
    footerText: {
        fontSize: 12,
        color: '#94a3b8',
    },
});

export default ProfileScreen;